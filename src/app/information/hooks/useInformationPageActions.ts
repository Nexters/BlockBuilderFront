import useLogging from '@/hooks/useLogging';
import { useCallback } from 'react';
import { blockchainNetworkLabelMap } from '../components/BlockchainLabel/const';
import { TBlockchainInformationData, TBlockchainInformationType } from '../type';

const useInformationPageActions = () => {
  const { sendLog } = useLogging();

  const handleInformationClick = useCallback(
    (information: TBlockchainInformationData, informationType: TBlockchainInformationType) => {
      const eventProperties = {
        소식_아이디: information.id,
        소식_제목: information.title,
        소식_타입: informationType,
        블록체인_네트워크: blockchainNetworkLabelMap[information.network].text,
      };

      sendLog({ eventName: '소식_페이지_전환', eventProperties });
    },
    [sendLog]
  );

  return {
    handleInformationClick,
  };
};

export default useInformationPageActions;
