import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';

const useNftPageActions = () => {
  const { sendLog } = useLogging();

  const handleSaveImageClick = useCallback(() => {
    sendLog({ eventName: 'NFT_이미지_저장' });
  }, [sendLog]);

  const handleOpenOpenseaClick = useCallback(() => {
    sendLog({ eventName: 'NFT_마켓_클릭' });
  }, [sendLog]);

  const handleOpenReceiptClick = useCallback(() => {
    sendLog({ eventName: 'NFT_영수증_클릭' });
  }, [sendLog]);

  return {
    handleSaveImageClick,
    handleOpenOpenseaClick,
    handleOpenReceiptClick,
  };
};

export default useNftPageActions;
