import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';

const useQuizPageActions = () => {
  const { sendLog } = useLogging();

  const handleQuizFinishClick = useCallback((correctCount: number) => {
    const eventProperties = {
      정답_개수: correctCount,
    };

    sendLog({ eventName: '퀴즈_제출_클릭', eventProperties });
  }, [sendLog]);

  const handleExplanationClick = useCallback(() => {
    sendLog({ eventName: '퀴즈_해설_클릭' });
  }, [sendLog]);

  const handleRecommendationClick = useCallback((type: string) => {
    const eventProperties = {
      활동: type,
    };

    sendLog({ eventName: '퀴즈_추천_클릭', eventProperties });
  }, [sendLog]);

  return {
    handleQuizFinishClick,
    handleExplanationClick,
    handleRecommendationClick,
  };
};

export default useQuizPageActions;
