import type { Metadata } from 'next';
import { Afacad } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';

const afacad = Afacad({
  variable: '--font-afacad',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

export const metadata: Metadata = {
  title: 'Wei Ting | Software Engineer Portfolio',
  description:
    'Expertise, projects, and experience in web development. Explore my work and get in touch.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${afacad.variable} bg-black santialiased`}>
        <div className="relative z-0 bg-black">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
