import Link from 'next/link';
import { usePathname } from 'next/navigation';
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import NavBar from '../components/NavBar';

const playfair = Playfair_Display({ 
  subsets: ['latin'],
  display: 'swap',
  weight: ['400', '500'],
  style: ['normal'],
})

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: "Mischa Mez",
  description: "Mischa Mez - MSc Robotics @ EPFL | Neuro-X Minor. Passionate about neuroscience, biomedical imaging, and robotics engineering.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = typeof window !== 'undefined' ? window.location.pathname : '';
  // For SSR/Next.js, use the hook:
  // const pathname = usePathname();
  // But for layout.tsx (a server component), we need a Client Component for the nav bar.

  // Move the nav bar to a client component for dynamic highlighting
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${inter.className} bg-[#f8f5ee] text-neutral-900 min-h-screen flex flex-col`}>
        <NavBar />
        <main className="flex-1 flex flex-col">{children}</main>
      </body>
    </html>
  );
}
