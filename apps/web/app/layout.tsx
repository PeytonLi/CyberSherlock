import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CyberSherlock",
  description: "Why cybersecurity matters — live threat map.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
