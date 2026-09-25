"use client";

import { Message } from "@/types/message";
import { formatRelativeTime } from "@/lib/utils/format-date";
import { cn } from "@/lib/utils";

interface ChatWindowProps {
  messages: Message[];
  currentUserId: string;
}

export function ChatWindow({ messages, currentUserId }: ChatWindowProps) {
  if (messages.length === 0) {
    return (
      <div className="flex h-full items-center justify-center p-8 text-sm text-zinc-400">
        Start the conversation by asking a question about this listing.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3 p-4 overflow-y-auto">
      {messages.map((msg) => {
        const isMe = msg.senderId === currentUserId;
        return (
          <div
            key={msg.id}
            className={cn("flex flex-col max-w-[75%]", isMe ? "self-end items-end" : "self-start items-start")}
          >
            <div
              className={cn(
                "rounded-2xl px-4 py-2.5 text-sm",
                isMe
                  ? "bg-emerald-600 text-white rounded-br-xs"
                  : "bg-zinc-100 text-zinc-900 rounded-bl-xs dark:bg-zinc-800 dark:text-zinc-100"
              )}
            >
              {msg.content}
            </div>
            <span className="mt-1 text-[10px] text-zinc-400 px-1">
              {formatRelativeTime(msg.createdAt)}
            </span>
          </div>
        );
      })}
    </div>
  );
}
