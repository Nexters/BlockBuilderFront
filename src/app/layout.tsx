import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';

import ResponsiveContainer from '@/components/ResponsiveContainer';
import { getInitialViewport } from '@/utils/viewport';
import { UserProvider } from '@/contexts/UserContext';
import TanStackProvider from '@/providers/TanstackProvider';

import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: 'for the block',
  description: '어렵기만 했던 블록체인, for the block에서 직접 경험하면서 쉽게 이해해보세요.',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const initialWidth = await getInitialViewport();

  return (
    <html lang="ko" suppressHydrationWarning className={`${pretendard.variable}`}>
      <body>
        <ThemeProvider attribute="class" enableSystem={false}>
          <UserProvider>
            <TanStackProvider>
              <ResponsiveContainer initialWidth={initialWidth}>{children}</ResponsiveContainer>
            </TanStackProvider>
          </UserProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
