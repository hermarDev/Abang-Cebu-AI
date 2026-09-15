import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Abang Cebu AI",
  description: "AI platform for Abang Cebu",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-zinc-50 text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        {children}
      </body>
    </html>
  );
}
