"use client"

import React, { useEffect, useState, useRef, useCallback } from 'react';
import { useRouter, useParams, usePathname } from 'next/navigation';
import { getChatDetails, getMessages, markMessagesAsRead } from '@/lib/kizfarm/chat';
import { useChats } from '@/hooks/use-chat';

type CurrentRole = 'buyer' | 'farmer';

interface Chat {
  _id: string;
  buyerId: any;
  farmerId: any;
  productId: any;
  lastMessage: string;
  lastMessageTime: string;
  isActive: boolean;
}

interface Message {
  _id?: string;
  chatId?: string;
  senderId: any;
  receiverId: any;
  content: string;
  messageType: 'text' | 'image' | 'file';
  attachmentUrl?: string;
  attachmentType?: string;
  isRead: boolean;
  deliveryStatus: 'sent' | 'delivered' | 'read';
  createdAt: string;
}

function getId(value: any) {
  if (!value) return '';
  if (typeof value === 'string') return value;
  if (typeof value === 'number') return String(value);
  if (value.$oid) return String(value.$oid);
  if (value._id) return getId(value._id);
  if (value.id) return String(value.id);
  if (value.userId) return getId(value.userId);
  if (typeof value.toString === 'function') return value.toString();
  return '';
}

function decodeJwtPayload(token: string | null) {
  if (!token) return null;

  try {
    const base64 = token
      .split('.')[1]
      .replace(/-/g, '+')
      .replace(/_/g, '/')
      .padEnd(Math.ceil(token.split('.')[1].length / 4) * 4, '=');
    return JSON.parse(atob(base64));
  } catch (err) {
    console.error('Failed to decode auth token:', err);
    return null;
  }
}

function getUserIdFromPayload(payload: any) {
  return getId(payload?.sub || payload?._id || payload?.id || payload?.userId);
}

function upsertMessage(messages: Message[], nextMessage: Message) {
  if (!nextMessage?._id) return [...messages, nextMessage];

  const existingIndex = messages.findIndex((message) => message._id === nextMessage._id);
  if (existingIndex === -1) return [...messages, nextMessage];

  return messages.map((message, index) =>
    index === existingIndex ? { ...message, ...nextMessage } : message
  );
}

function isMessageRead(message: Message) {
  return message.isRead || message.deliveryStatus === 'read';
}

type Props = {
  currentRole?: CurrentRole;
};

export default function ChatDetailPage({ currentRole }: Props) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const chatId = (params?.chatId || params?.id) as string | undefined;

  const [chat, setChat] = useState<Chat | null>(null);
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [inputMessage, setInputMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [typingUsers, setTypingUsers] = useState<Set<string>>(new Set());
  const [userInfo, setUserInfo] = useState<any>(null);

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const typingTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const {
    socket,
    isConnected,
    sendMessage: socketSendMessage,
    sendAttachment: socketSendAttachment,
    onNewMessage,
    onMessagesRead,
    onUserTyping,
    onUserStopTyping,
    emitMessagesRead,
    emitTyping,
    emitStopTyping,
    joinChat,
    leaveChat,
  } = useChats();
  const resolvedRole: CurrentRole =
    currentRole || (pathname.startsWith('/farmer') ? 'farmer' : 'buyer');
  const currentUserId =
    getUserIdFromPayload(userInfo) ||
    (chat ? (resolvedRole === 'farmer' ? getId(chat.farmerId) : getId(chat.buyerId)) : '');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Fetch chat details and initial messages
  useEffect(() => {
    const fetchChatData = async () => {
      if (!chatId) return;

      try {
        setLoading(true);
        const [chatData, messagesData] = await Promise.all([
          getChatDetails(chatId),
          getMessages(chatId, 50, 0),
        ]);

        setUserInfo(decodeJwtPayload(localStorage.getItem('kizfarm_token')));

        setChat(chatData);
        setMessages(messagesData);

      } catch (err) {
        console.error('Error fetching chat data:', err);
        setError('Failed to load chat');
      } finally {
        setLoading(false);
      }
    };

    fetchChatData();
  }, [chatId]);

  const markMessageIdsRead = useCallback(
    async (messageIds: string[]) => {
      if (!chatId || !currentUserId || messageIds.length === 0) return;

      setMessages((prev) =>
        prev.map((message) =>
          messageIds.includes(message._id || '')
            ? { ...message, isRead: true, deliveryStatus: 'read' as const }
            : message
        )
      );

      try {
        await markMessagesAsRead(messageIds);
        emitMessagesRead(chatId, messageIds, currentUserId);
      } catch (err) {
        console.error('Error marking messages as read:', err);
      }
    },
    [chatId, currentUserId, emitMessagesRead]
  );

  useEffect(() => {
    if (!chatId || !currentUserId) return;

    const unreadIncomingIds = messages
      .filter((message) => {
        return (
          message._id &&
          getId(message.senderId) !== currentUserId &&
          !message.isRead
        );
      })
      .map((message) => message._id as string);

    if (unreadIncomingIds.length > 0) {
      markMessageIdsRead(unreadIncomingIds);
    }
  }, [chatId, currentUserId, isConnected, markMessageIdsRead, messages]);

  // Join chat room and setup socket listeners
  useEffect(() => {
    if (!chatId || !isConnected || !currentUserId) return;

    joinChat(chatId);

    const unsubscribeNewMessage = onNewMessage((message: Message) => {
      if (message.chatId && message.chatId !== chatId) return;
      setMessages((prev) => upsertMessage(prev, message));
    });

    const unsubscribeMessagesRead = onMessagesRead(({ chatId: readChatId, messageIds, readerId }) => {
      if (readChatId && readChatId !== chatId) return;

      setMessages((prev) =>
        prev.map((message) =>
          messageIds.includes(message._id || '') &&
          getId(message.senderId) === currentUserId &&
          getId(readerId) !== currentUserId
            ? { ...message, isRead: true, deliveryStatus: 'read' as const }
            : message
        )
      );
    });

    const unsubscribeTyping = onUserTyping(
      ({ userId, userName }: { userId: string; userName: string }) => {
        if (userId !== currentUserId) {
          setTypingUsers((prev) => new Set([...prev, userId]));
        }
      }
    );

    const unsubscribeStopTyping = onUserStopTyping(({ userId }: { userId: string }) => {
      setTypingUsers((prev) => {
        const newSet = new Set(prev);
        newSet.delete(userId);
        return newSet;
      });
    });

    return () => {
      leaveChat(chatId);
      unsubscribeNewMessage();
      unsubscribeMessagesRead();
      unsubscribeTyping();
      unsubscribeStopTyping();
    };
  }, [chatId, currentUserId, isConnected, onNewMessage, onMessagesRead, onUserTyping, onUserStopTyping, joinChat, leaveChat]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || !chatId || sending) return;

    try {
      setSending(true);
      emitStopTyping(chatId, currentUserId);

      const message = await socketSendMessage(chatId, inputMessage);
      if (message) {
        setMessages((prev) => upsertMessage(prev, message));
        setInputMessage('');
      }
    } catch (err) {
      console.error('Error sending message:', err);
    } finally {
      setSending(false);
    }
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file || !chatId) return;

    try {
      setSending(true);
      const message = await socketSendAttachment(chatId, file);
      if (message) {
        setMessages((prev) => upsertMessage(prev, message));
        e.target.value = '';
      }
    } catch (err) {
      console.error('Error uploading file:', err);
    } finally {
      setSending(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputMessage(e.target.value);

    // Emit typing event
    if (chatId && currentUserId) {
      emitTyping(chatId, currentUserId, 'user');

      // Clear existing timeout
      if (typingTimeoutRef.current) {
        clearTimeout(typingTimeoutRef.current);
      }

      // Set new timeout to emit stop typing
      typingTimeoutRef.current = setTimeout(() => {
        emitStopTyping(chatId, currentUserId);
      }, 2000);
    }
  };

  const handleGoBack = () => {
    router.back();
  };

  const getOtherUser = () => {
    if (!chat) return null;
    return resolvedRole === 'farmer' ? chat.buyerId : chat.farmerId;
  };

  const otherUser = getOtherUser();

  if (loading) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-surface-bright">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-primary mb-4"></div>
          <p className="text-on-surface-variant">Loading chat...</p>
        </div>
      </div>
    );
  }

  if (error || !chat) {
    return (
      <div className="w-full h-screen flex items-center justify-center bg-surface-bright">
        <div className="text-center">
          <p className="text-error mb-4">{error || 'Chat not found'}</p>
          <button
            onClick={handleGoBack}
            className="px-6 py-2 bg-primary text-white rounded-lg hover:opacity-90 transition-opacity"
          >
            Go Back
          </button>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 left-0 w-full z-50 flex items-center justify-between px-4 h-16 bg-white border-b border-gray-200">
        <div className="flex items-center gap-3">
          <button
            onClick={handleGoBack}
            className="p-2 -ml-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all"
          >
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
          <div className="relative">
            <img
              alt={`${otherUser?.name} Profile`}
              className="w-10 h-10 rounded-full object-cover border border-gray-100"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnU0b86tW1fsVIJcsxIAUTx_AhLX09jzZYItDy-B1iFYYtaRYz1zQSyWL26x5wLz40kluYp0v9DYALVEG4TgZereimfbuQBMQZ-8etNQG-Nz6YKJPs780-96V87VWpn9AhYSMjMLyFElzAuDHu5DV_qngtG16jQuOFE4oSwoRz05--wHU3eswCbaLWYZHGpjIgo559Lkjjtk_IijgwBvmbDGynDdzH8S2F2LTdYVZYaF-5zO2eZBlElgsz_RTeKPQrQdV501i0toQ"
            />
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
          </div>
          <div className="flex flex-col">
            <span className="font-headline-md text-[16px] text-on-surface leading-tight">
              {otherUser?.name || 'User'}
            </span>
            <span className="text-label-xs text-[#1B6D24] font-medium">
              {typingUsers.size > 0 ? 'Typing...' : 'Online'}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <div className="hidden md:flex items-center mr-4">
            <img
              alt="KIZ FARM logo"
              className="h-6"
              src="/logo.jpeg"
            />
          </div>
          <button className="p-2 text-gray-500 hover:bg-gray-50 rounded-full active:scale-95 transition-all">
            <span className="material-symbols-outlined">info</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="pt-16 pb-24 min-h-screen max-w-3xl mx-auto px-4 flex flex-col">
        {/* Warning Banner */}
        <div className="mt-4 mb-6 p-4 bg-tertiary-fixed rounded-xl border border-tertiary/10 flex items-start gap-3">
          <span
            className="material-symbols-outlined text-tertiary mt-0.5"
            style={{ fontVariationSettings: "'FILL' 1" }}
          >
            shield
          </span>
          <p className="text-label-sm text-on-tertiary-fixed-variant leading-relaxed">
            Keep all transactions inside KIZ FARM for your safety
          </p>
        </div>

        {/* Chat History */}
        <div className="flex-1 space-y-4 flex flex-col">
          {messages.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-12">
              <span className="material-symbols-outlined text-6xl text-gray-300 mb-4">chat</span>
              <p className="text-on-surface-variant">No messages yet. Start the conversation!</p>
            </div>
          ) : (
            messages.map((msg) => {
              const isUserMessage = getId(msg.senderId) === currentUserId;
              const hasBeenRead = isMessageRead(msg);
              return (
                <div
                  key={msg._id || `${getId(msg.senderId)}-${msg.createdAt}`}
                  className={`w-full flex ${isUserMessage ? 'justify-end' : 'justify-start'}`}
                  style={{ justifyContent: isUserMessage ? 'flex-end' : 'flex-start' }}
                >
                  <div
                    className={`flex flex-col w-fit max-w-[85%] ${isUserMessage ? 'items-end' : 'items-start'}`}
                    style={{
                      marginLeft: isUserMessage ? 'auto' : 0,
                      marginRight: isUserMessage ? 0 : 'auto',
                    }}
                  >
                  {msg.messageType === 'text' ? (
                    <div
                      className={`${
                        isUserMessage
                          ? 'bg-primary-container text-on-primary-container'
                          : 'bg-surface-container text-on-surface border border-gray-100'
                      } p-4 rounded-2xl ${isUserMessage ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm`}
                    >
                      <p className="text-body-md">{msg.content}</p>
                    </div>
                  ) : msg.messageType === 'image' ? (
                    <div
                      className={`${
                        isUserMessage
                          ? 'bg-primary-container'
                          : 'bg-surface-container border border-gray-100'
                      } p-2 rounded-2xl ${isUserMessage ? 'rounded-tr-none' : 'rounded-tl-none'} overflow-hidden`}
                    >
                      <img
                        alt="Chat image"
                        className="rounded-xl w-full max-w-sm object-cover aspect-square md:aspect-video hover:scale-[1.02] transition-transform duration-300"
                        src={msg.attachmentUrl || ''}
                      />
                      {msg.content && (
                        <div className="p-2">
                          <p className={`text-body-md ${isUserMessage ? 'text-on-primary-container' : 'text-on-surface'}`}>
                            {msg.content}
                          </p>
                        </div>
                      )}
                    </div>
                  ) : (
                    <div
                      className={`${
                        isUserMessage
                          ? 'bg-primary-container'
                          : 'bg-surface-container border border-gray-100'
                      } p-3 rounded-2xl ${isUserMessage ? 'rounded-tr-none' : 'rounded-tl-none'} flex items-center gap-2`}
                    >
                      <span className="material-symbols-outlined">description</span>
                      <a
                        href={msg.attachmentUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`${isUserMessage ? 'text-on-primary-container' : 'text-primary'} underline`}
                      >
                        {msg.content || 'File'}
                      </a>
                    </div>
                  )}
                  <div className={`flex items-center gap-1 mt-2 ${isUserMessage ? 'mr-1' : 'ml-1'}`}>
                    <span className="text-label-xs text-gray-400">
                      {new Date(msg.createdAt).toLocaleTimeString([], {
                        hour: '2-digit',
                        minute: '2-digit',
                      })}
                    </span>
                    {isUserMessage && (
                      <>
                        <span
                          className={`material-symbols-outlined text-[16px] ${
                            hasBeenRead ? 'text-primary' : 'text-gray-400'
                          }`}
                          style={{ fontVariationSettings: "'FILL' 1" }}
                        >
                          {hasBeenRead ? 'done_all' : 'done'}
                        </span>
                        <span className={`text-label-xs ${hasBeenRead ? 'text-primary' : 'text-gray-400'}`}>
                          {hasBeenRead ? 'Seen' : 'Sent'}
                        </span>
                      </>
                    )}
                  </div>
                  </div>
                </div>
              );
            })
          )}
          <div ref={messagesEndRef} />
        </div>
      </main>

      {/* Bottom Message Input Shell */}
      <div className="fixed bottom-0 left-0 w-full bg-white/90 backdrop-blur-md border-t border-gray-100 p-4 z-50">
        <div className="max-w-3xl mx-auto flex items-center gap-3">
          <label className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all cursor-pointer">
            <input type="file" onChange={handleFileUpload} className="hidden" />
            <span className="material-symbols-outlined">add_circle</span>
          </label>
          <label className="flex items-center justify-center w-10 h-10 text-gray-500 hover:bg-gray-50 rounded-full active:scale-90 transition-all cursor-pointer">
            <input
              type="file"
              accept="image/*"
              onChange={handleFileUpload}
              className="hidden"
            />
            <span className="material-symbols-outlined">image</span>
          </label>
          <div className="flex-1 relative">
            <input
              className="w-full bg-surface-container-low border-none rounded-full px-6 py-3 text-body-md focus:ring-2 focus:ring-primary/20 focus:bg-white transition-all outline-none"
              placeholder="Type your message..."
              type="text"
              value={inputMessage}
              onChange={handleInputChange}
              onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
              disabled={sending}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!inputMessage.trim() || sending}
            className="bg-[#1B6D24] text-white w-12 h-12 flex items-center justify-center rounded-full shadow-lg shadow-primary/20 active:scale-95 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {sending ? (
              <span className="inline-block animate-spin rounded-full h-4 w-4 border-b-2 border-white"></span>
            ) : (
              <span className="material-symbols-outlined" style={{ fontVariationSettings: "'FILL' 1" }}>
                send
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="fixed inset-0 -z-10 bg-surface-bright"></div>
      <div className="fixed top-0 right-0 w-1/3 h-1/3 bg-primary/5 blur-[120px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-1/3 h-1/3 bg-tertiary/5 blur-[120px] -z-10 pointer-events-none"></div>
    </>
  );
}
