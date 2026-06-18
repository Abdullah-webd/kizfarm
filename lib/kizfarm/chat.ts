import { apiFetch } from "./api";

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

interface Message {
  _id: string;
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

/**
 * Get all conversations for the current user
 */
export async function getConversations(): Promise<Chat[]> {
  const { res, payload } = await apiFetch("/chat/conversations");
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to fetch conversations");
  }
  return payload?.chats || [];
}

/**
 * Get messages for a specific chat
 */
export async function getMessages(
  chatId: string,
  limit: number = 50,
  skip: number = 0
): Promise<Message[]> {
  const { res, payload } = await apiFetch(
    `/chat/${chatId}/messages?limit=${limit}&skip=${skip}`
  );
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to fetch messages");
  }
  return payload?.messages || [];
}

/**
 * Start or get existing chat with a farmer
 */
export async function startChat(
  farmerId: string,
  productId: string
): Promise<Chat> {
  const { res, payload } = await apiFetch("/chat/start", {
    method: "POST",
    body: JSON.stringify({ farmerId, productId }),
  });
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to start chat");
  }
  return payload?.chat;
}

/**
 * Get chat details
 */
export async function getChatDetails(chatId: string): Promise<Chat> {
  const { res, payload } = await apiFetch(`/chat/${chatId}`);
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to fetch chat details");
  }
  return payload?.chat;
}

/**
 * Send a text message
 */
export async function sendMessage(
  chatId: string,
  content: string
): Promise<Message> {
  const { res, payload } = await apiFetch(`/chat/${chatId}/send`, {
    method: "POST",
    body: JSON.stringify({ content, messageType: "text" }),
  });
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to send message");
  }
  return payload?.message;
}

/**
 * Send a message with attachment (image or file)
 */
export async function sendAttachment(
  chatId: string,
  file: File,
  caption?: string
): Promise<Message> {
  const token = localStorage.getItem("kizfarm_token");
  if (!token) {
    throw new Error("Not authenticated");
  }

  const formData = new FormData();
  formData.append("attachment", file);
  if (caption) {
    formData.append("content", caption);
  }

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000"}/chat/${chatId}/send-attachment`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    const data = await response.json();
    throw new Error(data?.error || "Failed to send attachment");
  }

  const data = await response.json();
  return data?.message;
}

/**
 * Mark message as read
 */
export async function markMessageAsRead(messageId: string): Promise<void> {
  const { res, payload } = await apiFetch(`/chat/${messageId}/mark-read`, {
    method: "PATCH",
  });
  if (!res.ok) {
    throw new Error(payload?.error || "Failed to mark message as read");
  }
}

/**
 * Mark multiple messages as read
 */
export async function markMessagesAsRead(messageIds: string[]): Promise<void> {
  await Promise.all(messageIds.map((id) => markMessageAsRead(id)));
}
