export interface Message {
  id: string;
  conversationId: string;
  senderId: string;
  recipientId: string;
  propertyId?: string | null;
  content: string;
  isRead: boolean;
  createdAt: string;
}

export interface Conversation {
  id: string;
  propertyId?: string | null;
  propertyTitle?: string;
  participantIds: string[];
  lastMessage?: string;
  lastMessageAt?: string;
  unreadCount?: number;
}
