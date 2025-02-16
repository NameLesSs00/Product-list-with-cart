import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Product List with cart",
  description: "the first time doing such thing easy on me",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
      >
        {children}
      </body>
    </html>
  );
}
