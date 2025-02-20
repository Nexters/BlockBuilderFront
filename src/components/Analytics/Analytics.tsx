'use client';

import { initMixpanel } from '@/components/Analytics/mixpanel';
import mixpanel from 'mixpanel-browser';
import { usePathname } from 'next/navigation';
import { ReactNode, useEffect } from 'react';

const pathnameToPageMap: Record<string, string> = {
  '/': '홈',
  '/quiz': '블록체인_퀴즈',
  '/coin': '나만의_코인_생성',
  '/nft': '나만의_NFT_생성',
  '/chat': '블록챗',
  '/poll': '투표',
  '/information': '소식',
};

const Analytics = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  useEffect(() => {
    initMixpanel();
  }, []);

  useEffect(() => {
    const page = pathnameToPageMap[pathname];

    if (page) {
      mixpanel.track(`${page}_페이지_조회`);
    }
  }, [pathname]);

  return <>{children}</>;
};

export default Analytics;
