import { Inter } from 'next/font/google';
import './globals.css';
import { Metadata } from 'next';
import { NextAuthProvider } from './providers';
import Header from './components/layout/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Next.js App with LINE Auth',
  description: 'Created with Next.js 14 and LINE Authentication',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NextAuthProvider>
          <Header />
          {children}
        </NextAuthProvider>
      </body>
    </html>
  );
}