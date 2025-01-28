'use client';

import { useEffect, useState } from 'react';
import Desktop from './Desktop';
import Mobile from './Mobile';
import Tablet from './Tablet';
import { INITIAL_VIEWPORT_SIZE, BREAKPOINT } from '@/constants/viewport';

interface ResponsiveContainerProps {
  children: React.ReactNode;
  initialWidth: number;
}

export default function ResponsiveContainer({ children, initialWidth }: ResponsiveContainerProps) {
  const [isDesktop, setIsDesktop] = useState(initialWidth === INITIAL_VIEWPORT_SIZE.DESKTOP);
  const [isTablet, setIsTablet] = useState(initialWidth === INITIAL_VIEWPORT_SIZE.TABLET);
  const [isMobile, setIsMobile] = useState(initialWidth === INITIAL_VIEWPORT_SIZE.MOBILE);

  useEffect(() => {
    const checkViewport = () => {
      setIsMobile(window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`).matches);
      setIsTablet(
        window.matchMedia(`(min-width: ${BREAKPOINT.MOBILE + 1}px) and (max-width: ${BREAKPOINT.TABLET}px)`).matches
      );
      setIsDesktop(window.matchMedia(`(min-width: ${BREAKPOINT.DESKTOP}px)`).matches);
    };

    checkViewport();

    const mobileQuery = window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`);
    const tabletQuery = window.matchMedia(
      `(min-width: ${BREAKPOINT.MOBILE + 1}px) and (max-width: ${BREAKPOINT.TABLET}px)`
    );
    const desktopQuery = window.matchMedia(`(min-width: ${BREAKPOINT.DESKTOP}px)`);

    mobileQuery.addEventListener('change', checkViewport);
    tabletQuery.addEventListener('change', checkViewport);
    desktopQuery.addEventListener('change', checkViewport);

    return () => {
      mobileQuery.removeEventListener('change', checkViewport);
      tabletQuery.removeEventListener('change', checkViewport);
      desktopQuery.removeEventListener('change', checkViewport);
    };
  }, []);

  if (isDesktop) {
    return <Desktop>{children}</Desktop>;
  }
  if (isTablet) {
    return <Tablet>{children}</Tablet>;
  }
  if (isMobile) {
    return <Mobile>{children}</Mobile>;
  }
  return null;
}
