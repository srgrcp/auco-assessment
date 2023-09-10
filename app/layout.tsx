import './globals.css';
import type { Metadata } from 'next';
import { Montserrat } from 'next/font/google';

const montserrat = Montserrat({ subsets: ['latin'] });

export const runtime = 'edge';

export const metadata: Metadata = {
  title: 'Auco Assessment By Sergio Carrillo',
  description:
    'Esta es una prueba técnica desarrollada por Sergio Carrillo, utilizando Next.js, tailwindcss y Cloudflare pages.',
  robots: 'index, follow',
  alternates: {
    canonical: 'https://auco-assessment.pages.dev/',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={montserrat.className}>{children}</body>
    </html>
  );
}
