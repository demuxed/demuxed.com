import './globals.css';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';

import Navigation from '../components/Navigation';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Demuxed',
  description: 'The conference & community for video devs',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-slate-50`}>
        <Navigation />
        <div className="bg-white px-4 md:px-0">{children}</div>
        <Footer />
        <Analytics />
      </body>
    </html>
  );
}
