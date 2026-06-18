"use client"

import { useEffect, useState, useCallback, useRef } from "react";
import { io, Socket } from "socket.io-client";

interface Message {
  _id?: string;
  chatId: string;
  senderId: {
    _id: string;
    name: string;
    email: string;
    role: string;
  };
  receiverId: string;
  content: string;
  messageType: "text" | "image" | "file";
  attachmentUrl?: string;
  attachmentType?: string;
  isRead: boolean;
  deliveryStatus: "sent" | "delivered" | "read";
  createdAt: string;
}

interface Chat {
  _id: string;
  buyerId: {
    _id: string;
    name: string;
    email: string;
  };
  farmerId: {
    _id: string;
    name: string;
    email: string;
  };
  productId: {
    _id: string;
    name: string;
    price: number;
    images: string[];
  };
  lastMessage: string;
  lastMessageTime: string;
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

interface UseChatsReturn {
  socket: Socket | null;
  messages: Message[];
  isConnected: boolean;
  isSending: boolean;
  isLoading: boolean;
  error: string | null;
  sendMessage: (chatId: string, content: string) => Promise<Message | null>;
  sendAttachment: (chatId: string, file: File, caption?: string) => Promise<Message | null>;
  markMessagesAsRead: (messageIds: string[]) => Promise<void>;
  onNewMessage: (callback: (message: Message) => void) => () => void;
  onMessagesRead: (
    callback: (data: { chatId: string; messageIds: string[]; readerId: string }) => void
  ) => () => void;
  onUserTyping: (callback: (data: { userId: string; userName: string }) => void) => () => void;
  onUserStopTyping: (callback: (data: { userId: string }) => void) => () => void;
  emitMessagesRead: (chatId: string, messageIds: string[], readerId: string) => void;
  emitTyping: (chatId: string, userId: string, userName: string) => void;
  emitStopTyping: (chatId: string, userId: string) => void;
  joinChat: (chatId: string) => void;
  leaveChat: (chatId: string) => void;
}

const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

export function useChats(): UseChatsReturn {
  const [socket, setSocket] = useState<Socket | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [isConnected, setIsConnected] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const messageCallbacks = useRef<((message: Message) => void)[]>([]);
  const readCallbacks = useRef<((data: { chatId: string; messageIds: string[]; readerId: string }) => void)[]>([]);
  const typingCallbacks = useRef<((data: { userId: string; userName: string }) => void)[]>([]);
  const stopTypingCallbacks = useRef<((data: { userId: string }) => void)[]>([]);

  // Initialize Socket.io connection
  useEffect(() => {
    const newSocket = io(API_URL, {
      reconnection: true,
      reconnectionDelay: 1000,
      reconnectionDelayMax: 5000,
      reconnectionAttempts: 5,
    });

    newSocket.on("connect", () => {
      console.log("Socket connected:", newSocket.id);
      setIsConnected(true);
      
      // Get token and emit user_online
      const token = localStorage.getItem("kizfarm_token");
      if (token) {
        // Decode token to get userId (basic JWT decode)
        try {
          const payload = JSON.parse(atob(token.split(".")[1]));
          newSocket.emit("user_online", payload.sub);
        } catch (err) {
          console.error("Failed to decode token:", err);
        }
      }
    });

    newSocket.on("disconnect", () => {
      console.log("Socket disconnected");
      setIsConnected(false);
    });

    newSocket.on("new_message", (message: Message) => {
      setMessages((prev) => [...prev, message]);
      messageCallbacks.current.forEach((cb) => cb(message));
    });

    newSocket.on("messages_read", (data: { chatId: string; messageIds: string[]; readerId: string }) => {
      setMessages((prev) =>
        prev.map((msg) =>
          data.messageIds.includes(msg._id || "")
            ? { ...msg, isRead: true, deliveryStatus: "read" as const }
            : msg
        )
      );
      readCallbacks.current.forEach((cb) => cb(data));
    });

    newSocket.on("user_typing", (data: { userId: string; userName: string }) => {
      typingCallbacks.current.forEach((cb) => cb(data));
    });

    newSocket.on("user_stop_typing", (data: { userId: string }) => {
      stopTypingCallbacks.current.forEach((cb) => cb(data));
    });

    setSocket(newSocket);

    return () => {
      newSocket.close();
    };
  }, []);

  const sendMessage = useCallback(
    async (chatId: string, content: string): Promise<Message | null> => {
      if (!content.trim()) return null;

      try {
        setIsSending(true);
        setError(null);

        const token = localStorage.getItem("kizfarm_token");
        if (!token) {
          setError("Not authenticated");
          return null;
        }

        const response = await fetch(`${API_URL}/chat/${chatId}/send`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          body: JSON.stringify({ content, messageType: "text" }),
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.error || "Failed to send message");
          return null;
        }

        const data = await response.json();
        const message = data.message;

        // Emit via socket
        if (socket && socket.connected) {
          socket.emit("send_message", { chatId, message });
        }

        setMessages((prev) => [...prev, message]);
        return message;
      } catch (err) {
        console.error("Error sending message:", err);
        setError("Failed to send message");
        return null;
      } finally {
        setIsSending(false);
      }
    },
    [socket]
  );

  const sendAttachment = useCallback(
    async (chatId: string, file: File, caption?: string): Promise<Message | null> => {
      try {
        setIsSending(true);
        setError(null);

        const token = localStorage.getItem("kizfarm_token");
        if (!token) {
          setError("Not authenticated");
          return null;
        }

        const formData = new FormData();
        formData.append("attachment", file);
        if (caption) {
          formData.append("content", caption);
        }

        const response = await fetch(`${API_URL}/chat/${chatId}/send-attachment`, {
          method: "POST",
          headers: {
            Authorization: `Bearer ${token}`,
          },
          body: formData,
        });

        if (!response.ok) {
          const data = await response.json();
          setError(data.error || "Failed to send attachment");
          return null;
        }

        const data = await response.json();
        const message = data.message;

        // Emit via socket
        if (socket && socket.connected) {
          socket.emit("send_message", { chatId, message });
        }

        setMessages((prev) => [...prev, message]);
        return message;
      } catch (err) {
        console.error("Error sending attachment:", err);
        setError("Failed to send attachment");
        return null;
      } finally {
        setIsSending(false);
      }
    },
    [socket]
  );

  const markMessagesAsRead = useCallback(async (messageIds: string[]) => {
    try {
      const token = localStorage.getItem("kizfarm_token");
      if (!token) return;

      await Promise.all(
        messageIds.map((messageId) =>
          fetch(`${API_URL}/chat/${messageId}/mark-read`, {
            method: "PATCH",
            headers: {
              Authorization: `Bearer ${token}`,
            },
          })
        )
      );

      setMessages((prev) =>
        prev.map((msg) =>
          messageIds.includes(msg._id || "")
            ? { ...msg, isRead: true, deliveryStatus: "read" as const }
            : msg
        )
      );
    } catch (err) {
      console.error("Error marking messages as read:", err);
    }
  }, []);

  const onNewMessage = useCallback((callback: (message: Message) => void) => {
    messageCallbacks.current.push(callback);
    return () => {
      messageCallbacks.current = messageCallbacks.current.filter((cb) => cb !== callback);
    };
  }, []);

  const onMessagesRead = useCallback(
    (callback: (data: { chatId: string; messageIds: string[]; readerId: string }) => void) => {
      readCallbacks.current.push(callback);
      return () => {
        readCallbacks.current = readCallbacks.current.filter((cb) => cb !== callback);
      };
    },
    []
  );

  const onUserTyping = useCallback((callback: (data: { userId: string; userName: string }) => void) => {
    typingCallbacks.current.push(callback);
    return () => {
      typingCallbacks.current = typingCallbacks.current.filter((cb) => cb !== callback);
    };
  }, []);

  const onUserStopTyping = useCallback((callback: (data: { userId: string }) => void) => {
    stopTypingCallbacks.current.push(callback);
    return () => {
      stopTypingCallbacks.current = stopTypingCallbacks.current.filter((cb) => cb !== callback);
    };
  }, []);

  const emitTyping = useCallback(
    (chatId: string, userId: string, userName: string) => {
      if (socket && socket.connected) {
        socket.emit("typing", { chatId, userId, userName });
      }
    },
    [socket]
  );

  const emitMessagesRead = useCallback(
    (chatId: string, messageIds: string[], readerId: string) => {
      if (socket && socket.connected && messageIds.length > 0) {
        socket.emit("messages_read", { chatId, messageIds, readerId });
      }
    },
    [socket]
  );

  const emitStopTyping = useCallback(
    (chatId: string, userId: string) => {
      if (socket && socket.connected) {
        socket.emit("stop_typing", { chatId, userId });
      }
    },
    [socket]
  );

  const joinChat = useCallback(
    (chatId: string) => {
      if (socket && socket.connected) {
        socket.emit("join_chat", chatId);
      }
    },
    [socket]
  );

  const leaveChat = useCallback(
    (chatId: string) => {
      if (socket && socket.connected) {
        socket.emit("leave_chat", chatId);
      }
    },
    [socket]
  );

  return {
    socket,
    messages,
    isConnected,
    isSending,
    isLoading,
    error,
    sendMessage,
    sendAttachment,
    markMessagesAsRead,
    onNewMessage,
    onMessagesRead,
    onUserTyping,
    onUserStopTyping,
    emitMessagesRead,
    emitTyping,
    emitStopTyping,
    joinChat,
    leaveChat,
  };
}
