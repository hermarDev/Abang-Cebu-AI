"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MessageInputProps {
  onSend: (content: string) => Promise<void> | void;
  disabled?: boolean;
}

export function MessageInput({ onSend, disabled }: MessageInputProps) {
  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!text.trim() || disabled) return;
    const msg = text;
    setText("");
    await onSend(msg);
  };

  return (
    <form onSubmit={handleSubmit} className="flex items-center gap-2 border-t border-zinc-200 p-3 dark:border-zinc-800">
      <input
        type="text"
        placeholder="Type a message to the landlord/renter..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        disabled={disabled}
        className="flex-1 rounded-full border border-zinc-300 bg-zinc-50 px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 dark:border-zinc-700 dark:bg-zinc-900"
      />
      <Button type="submit" size="icon" disabled={!text.trim() || disabled} className="rounded-full">
        <Send className="h-4 w-4" />
      </Button>
    </form>
  );
}
