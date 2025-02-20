import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';

const useCoinPageActions = () => {
  const { sendLog } = useLogging();

  const handleSaveImageClick = useCallback(() => {
    sendLog({ eventName: '코인_이미지_저장' });
  }, [sendLog]);

  const handleOpenReceiptClick = useCallback(() => {
    sendLog({ eventName: '코인_영수증_클릭' });
  }, [sendLog]);

  return {
    handleSaveImageClick,
    handleOpenReceiptClick,
  };
};

export default useCoinPageActions;
