import type { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import localFont from 'next/font/local';

import ResponsiveContainer from '@/components/ResponsiveContainer';
import { UserProvider } from '@/contexts/UserContext';
import TanStackProvider from '@/providers/TanstackProvider';
import { getInitialViewport } from '@/utils/viewport';

import Analytics from '@/components/Analytics/Analytics';
import './globals.css';

const pretendard = localFont({
  src: '../../public/fonts/PretendardVariable.woff2',
  display: 'swap',
  weight: '45 920',
  variable: '--font-pretendard',
});

export const metadata: Metadata = {
  title: {
    template: '%s | for the Block',
    default: '블록체인 큐레이터 - for the Block',
  },
  description:
    '블록체인 정보를 더 쉽고 빠르게! 최신 블록체인 소식을 제공하고, 대화를 통해 블록체인 개념을 쉽게 이해할 수 있도록 도와줍니다.',
  keywords: [
    'blockchain',
    '블록체인',
    '블록체인 챗봇',
    '블록체인 투표',
    '블록체인 밋업',
    '블록체인 해커톤',
    '블록체인 뉴스',
    '블록체인 NFT',
    '블록체인 교육',
    '이더리움',
    '베이스 이더리움',
    'web3 온보딩',
  ],
  applicationName: 'for the Block',
  openGraph: {
    title: '블록체인 큐레이터 - for the Block',
    description:
      '블록체인 정보를 더 쉽고 빠르게! 최신 블록체인 소식을 제공하고, 대화를 통해 블록체인 개념을 쉽게 이해할 수 있도록 도와줍니다.',
    type: 'website',
    siteName: 'for the block',
    url: 'https://www.for-the-block.com',
    images: {
      url: '/opengraph-image.png',
      alt: 'for the Block',
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    title: '블록체인 큐레이터 - for the Block',
    description:
      '블록체인 정보를 더 쉽고 빠르게! 최신 블록체인 소식을 제공하고, 대화를 통해 블록체인 개념을 쉽게 이해할 수 있도록 도와줍니다.',
    site: 'https://www.for-the-block.com',
    images: {
      url: '/twitter-image.png',
      alt: 'for the Block',
      width: 1200,
      height: 630,
    },
  },
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
        <Analytics>
          <ThemeProvider attribute="class" enableSystem={false}>
            <UserProvider>
              <TanStackProvider>
                <ResponsiveContainer initialWidth={initialWidth}>{children}</ResponsiveContainer>
              </TanStackProvider>
            </UserProvider>
          </ThemeProvider>
        </Analytics>
      </body>
    </html>
  );
}
