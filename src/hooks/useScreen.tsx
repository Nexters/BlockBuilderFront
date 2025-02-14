import { BREAKPOINT } from '@/constants/viewport';

const useScreen = () => {
  const isMobile = window.matchMedia(`(max-width: ${BREAKPOINT.MOBILE}px)`).matches;

  return { isMobile };
};

export default useScreen;
