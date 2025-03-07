import type { Metadata } from 'next';
import { Afacad } from 'next/font/google';
import Navbar from '@/components/Navbar';
import './globals.css';
import Hero from '@/components/Hero';
import StarsCanvas from '@/components/canvas/Stars';

const afacad = Afacad({
  variable: '--font-afacad',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'], // Adjust based on your needs
});

export const metadata: Metadata = {
  title: 'Developer Portfolio',
  description: '3D Developer Portfolio',
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
          <div className="bg-cover bg-no-repeat bg-center">
            <Navbar />
            <div className="relative z-0">
              <Hero />
              {/* <StarsCanvas /> */}
            </div>
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
