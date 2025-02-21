import { BREAKPOINT } from '@/constants/viewport';
import { useEffect, useState } from 'react';

const useScreen = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`).matches);
  }, []);

  return { isMobile };
};

export default useScreen;
