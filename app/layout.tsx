import type { Metadata } from "next";
import type { ReactNode } from "react";

export const metadata: Metadata = {
  title: "test-vercel-workflow",
  description: "Minimal Next.js app for Vercel workflow testing"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body
        style={{
          margin: 0,
          fontFamily: "ui-sans-serif, system-ui, sans-serif",
          background: "#0f172a",
          color: "#e2e8f0"
        }}
      >
        {children}
      </body>
    </html>
  );
}
