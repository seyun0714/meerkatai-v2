import type { Metadata } from 'next';
import localFont from 'next/font/local';
import '@/shared/styles/globals.css';

const WantedSans = localFont({
  src: '../../public/fonts/WantedSansVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-wanted-sans',
});

export const metadata: Metadata = {
  title: 'MeerKatAI',
  description: 'AI 무인점포 이상행동 감지',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={`${WantedSans.variable} antialiased`}>{children}</body>
    </html>
  );
}
