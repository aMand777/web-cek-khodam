import job from '@/utils/cron';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import NameProvider from '@/context/Name';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Cek Khodam',
  description: 'Cek Khodam Online',
  verification: {
    google: process.env.GOOGLE_SEARCH_CONSOLE_VERIFICATION,
  },
};

job.start();

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="bg-[url('/bg-sm.webp')] md:bg-[url('/bg-md.webp')] lg:bg-[url('/bg-lg.webp')] bg-no-repeat bg-cover"
      data-theme="cupcake"
    >
      <body className={`${inter.className} w-screen h-screen glass-container`}>
        <NameProvider>{children}</NameProvider>
      </body>
    </html>
  );
}
