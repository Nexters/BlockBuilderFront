import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';

const useChatPageActions = () => {
  const { sendLog } = useLogging();

  const handleRecommendationLevelClick = useCallback((level: string) => {
    const eventProperties = {
      레벨: level,
    };

    sendLog({ eventName: '채팅_질문_추천_레벨_클릭', eventProperties });
  }, [sendLog]);

  const handleRecommendationSwipe = useCallback(() => {
    sendLog({ eventName: '채팅_질문_추천_스와이프' });
  }, [sendLog]);

  const handleRecommendationSelect = useCallback((question: string) => {
    const eventProperties = {
      질문: question,
    };

    sendLog({ eventName: '채팅_질문_추천_선택', eventProperties });
  }, [sendLog]);

  const handleTotalQuestionClick = useCallback(() => {
    sendLog({ eventName: '채팅_질문_더보기_클릭' });
  }, [sendLog]);

  const handleTotalLevelClick = useCallback((level: string) => {
    const eventProperties = {
      레벨: level,
    };

    sendLog({ eventName: '채팅_전체_질문_레벨_클릭', eventProperties });
  }, [sendLog]);

  const handleTotalCategoryClick = useCallback((category: string) => {
    const eventProperties = {
      카테고리: category,
    };

    sendLog({ eventName: '채팅_전체_질문_카테고리_클릭', eventProperties });
  }, [sendLog]);

  const handleTotalQuestionSelect = useCallback((question: string) => {
    const eventProperties = {
      질문: question,
    };

    sendLog({ eventName: '채팅_전체_질문_선택', eventProperties });
  }, [sendLog]);

  const handleQuestionSubmit = useCallback((question: string) => {
    const eventProperties = {
      질문: question,
    };

    sendLog({ eventName: '채팅_질문_제출', eventProperties });
  }, [sendLog]);

  const handleCopyClick = useCallback(() => {
    sendLog({ eventName: '채팅_질문_답변_복사' });
  }, [sendLog]);

  const handleRegenerateClick = useCallback(() => {
    sendLog({ eventName: '채팅_질문_답변_재생성' });
  }, [sendLog]);

  return {
    handleRecommendationLevelClick,
    handleRecommendationSwipe,
    handleRecommendationSelect,
    handleTotalQuestionClick,
    handleTotalLevelClick,
    handleTotalCategoryClick,
    handleTotalQuestionSelect,
    handleQuestionSubmit,
    handleCopyClick,
    handleRegenerateClick,
  };
};

export default useChatPageActions;
