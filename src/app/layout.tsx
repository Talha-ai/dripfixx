// RootLayout.jsx
import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Drippfix - Advanced Waterproofing Solutions',
  description:
    "India's Most Advanced Waterproofing, Corrosion Control & Chemical Protection System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800">{children}</body>
    </html>
  );
}
