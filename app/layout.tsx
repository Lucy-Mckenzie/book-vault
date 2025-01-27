import type { Metadata } from 'next';
import { Outfit } from 'next/font/google';
import './globals.css';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';

const outfit = Outfit({
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Book Vault',
  description: 'Track your books, save read books/future books.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en' className={`${outfit.className} antialiased`} >
      <body>
        <NavBar />
          {children}
        <Footer />
      </body>
    </html>
  );
}
