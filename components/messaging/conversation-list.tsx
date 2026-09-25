"use client";

import { Conversation } from "@/types/message";
import { formatRelativeTime } from "@/lib/utils/format-date";
import { cn } from "@/lib/utils";

interface ConversationListProps {
  conversations: Conversation[];
  selectedId?: string;
  onSelect: (id: string) => void;
}

export function ConversationList({
  conversations,
  selectedId,
  onSelect,
}: ConversationListProps) {
  if (conversations.length === 0) {
    return (
      <div className="p-8 text-center text-sm text-zinc-500">
        No active conversations yet.
      </div>
    );
  }

  return (
    <div className="divide-y divide-zinc-200 dark:divide-zinc-800">
      {conversations.map((conv) => {
        const isSelected = conv.id === selectedId;
        return (
          <button
            key={conv.id}
            onClick={() => onSelect(conv.id)}
            className={cn(
              "w-full p-4 text-left transition-colors cursor-pointer",
              isSelected
                ? "bg-emerald-50 dark:bg-emerald-950/30"
                : "hover:bg-zinc-50 dark:hover:bg-zinc-900"
            )}
          >
            <div className="flex items-center justify-between">
              <span className="font-semibold text-sm text-zinc-900 dark:text-zinc-100 line-clamp-1">
                {conv.propertyTitle || "Property Inquiry"}
              </span>
              {conv.lastMessageAt && (
                <span className="text-xs text-zinc-400">
                  {formatRelativeTime(conv.lastMessageAt)}
                </span>
              )}
            </div>
            {conv.lastMessage && (
              <p className="mt-1 line-clamp-1 text-xs text-zinc-500 dark:text-zinc-400">
                {conv.lastMessage}
              </p>
            )}
          </button>
        );
      })}
    </div>
  );
}
