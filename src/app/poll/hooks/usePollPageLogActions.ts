import { useCallback } from 'react';

import useLogging from '@/hooks/useLogging';

export default function usePollPageLogActions() {
  const { sendLog } = useLogging();

  const handleLoggingOpenTooltip = useCallback(() => {
    sendLog({
      eventName: '투표_툴팁_열기',
    });
  }, [sendLog]);

  const handleLoggingSwitchTab = useCallback(
    (tab: 'ongoing' | 'end') => {
      sendLog({
        eventName: '투표_탭_전환',
        eventProperties: {
          tab: tab === 'ongoing' ? '진행중인 투표' : '종료된 투표',
        },
      });
    },
    [sendLog]
  );

  const handleLoggingSubmitPoll = useCallback(
    (poll: { id: number; eoa: string; optionIndex: number; option: string }) => {
      sendLog({
        eventName: '투표_참여',
        eventProperties: {
          투표_아이디: poll.id,
          투표_참여자_계정: poll.eoa,
          투표_옵션_인덱스: poll.optionIndex,
          투표_옵션: poll.option,
        },
      });
    },
    [sendLog]
  );

  return {
    handleLoggingOpenTooltip,
    handleLoggingSwitchTab,
    handleLoggingSubmitPoll,
  };
}
