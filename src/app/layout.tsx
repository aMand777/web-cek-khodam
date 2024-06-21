import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cek Khodam',
  description: 'Cek Khodam Online',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[url('/bg-sm.webp')] md:bg-[url('/bg-md.webp')] lg:bg-[url('/bg-lg.webp')] bg-no-repeat bg-cover"
    >
      <body className={`${inter.className} w-screen h-screen glass-container`}>{children}</body>
    </html>
  );
}
