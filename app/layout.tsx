// Next
import type { Metadata } from "next";

// Css
import "./globals.css";

export const metadata: Metadata = {
  title: "ShareMe",
  description:
    "ShareMe is a dynamic open-source social media platform crafted with the express purpose of effortlessly sharing captivating images across the vast expanse of the internet",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
