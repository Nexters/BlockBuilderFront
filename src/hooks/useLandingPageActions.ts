import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';

const useLandingPageActions = () => {
  const { sendLog } = useLogging();

  const handleLandingCardClick = useCallback((type: string) => {
    const eventProperties = {
      타입: type,
    };

    sendLog({ eventName: '랜딩_카드_클릭', eventProperties });
  }, [sendLog]);

  return {
    handleLandingCardClick,
  };
};

export default useLandingPageActions;
