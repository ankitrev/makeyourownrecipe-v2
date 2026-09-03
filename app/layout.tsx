import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "MakeYourOwnRecipe — What should you cook tonight?",
  description:
    "Get three realistic dinner ideas based on your time, situation, and what's already in your kitchen."
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}