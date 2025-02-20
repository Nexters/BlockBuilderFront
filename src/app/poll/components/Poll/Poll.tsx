'use client';

import { useState } from 'react';
import { useMutation } from '@tanstack/react-query';
import RadioOption from './RadioOption';
import { userStorage } from '@/hooks/useUser';
import { postParticipateToVote } from '../../api/postParticipateToVote';
import SubmitButton from './SubmitButton';
import { useToast } from '@/contexts/ToastContext';
import { useDebounce } from '@/hooks/useDebounce';
import loadingAnimation from '@/assets/lotties/loading.json';
import dynamic from 'next/dynamic';
import usePollPageLogActions from '../../hooks/usePollPageLogActions';
interface PollProps {
  endTime: string;
  topicNo: number;
  title: string;
  voterCount: number;
  firstOption: string;
  firstOptionPercentage: number;
  secondOption: string;
  secondOptionPercentage: number;
  voted: boolean;
  voted_option?: number;
  receipt_link?: string;
  onVoted: () => void;
}

const Lottie = dynamic(() => import('lottie-react'), { ssr: false });

export default function Poll({
  endTime,
  topicNo,
  title,
  voterCount,
  firstOption,
  firstOptionPercentage,
  secondOption,
  secondOptionPercentage,
  receipt_link,
  voted,
  voted_option,
  onVoted,
}: PollProps) {
  const eoa = userStorage.getUserData()?.token || '';
  const [selected, setSelected] = useState<number>(0);

  const { handleLoggingSubmitPoll } = usePollPageLogActions();

  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));
  };

  const { mutateAsync: participateToVote, isPending } = useMutation({
    mutationFn: postParticipateToVote,
    onSuccess: () => {
      onVoted?.();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleVote = async () => {
    await participateToVote({ eoa, topicNo, voteOption: selected });
    showToast('투표가 완료되었어요!');
    handleLoggingSubmitPoll({
      id: topicNo,
      eoa,
      optionIndex: selected,
      option: selected === 1 ? firstOption : secondOption,
    });
  };

  const handleOpenReceiptLink = () => {
    window.open(receipt_link, '_blank');
  };

  const debouncedVote = useDebounce({
    callback: handleVote,
    delay: 500,
  });
  const debouncedOpenReceiptLink = useDebounce({
    callback: handleOpenReceiptLink,
    delay: 500,
  });

  const isExpired = new Date(endTime) < new Date();
  const isDisabled = voted || isExpired;

  return (
    <fieldset className="rounded-[1.2rem] bg-background px-[3rem] py-[2rem]">
      <p className="text-title-3-semibold text-gray-900">{title}</p>
      <div className="mt-[0.4rem] flex justify-between">
        <p className="text-body-2-medium text-gray-600">{voterCount}명 참여중</p>
      </div>
      <div className="mb-[3rem] mt-[2rem] flex flex-col gap-[2rem]">
        <RadioOption
          name="blockchain"
          value={1}
          label={firstOption}
          percentage={firstOptionPercentage}
          checked={selected === 1}
          isExpired={isExpired}
          onChange={handleChange}
          disabled={isDisabled}
          voted={voted}
          isVotedByUser={voted_option === 1}
          isWinner={firstOptionPercentage > secondOptionPercentage}
          isDraw={firstOptionPercentage === secondOptionPercentage}
        />
        <RadioOption
          name="blockchain"
          value={2}
          label={secondOption}
          percentage={secondOptionPercentage}
          checked={selected === 2}
          isExpired={isExpired}
          onChange={handleChange}
          disabled={isDisabled}
          voted={voted}
          isVotedByUser={voted_option === 2}
          isWinner={firstOptionPercentage < secondOptionPercentage}
          isDraw={firstOptionPercentage === secondOptionPercentage}
        />
      </div>
      {isPending && (
        <div className="flex h-[4.8rem] w-full items-center justify-center">
          <Lottie
            animationData={loadingAnimation}
            loop={true}
            style={{
              width: 100,
              height: 48,
            }}
          />
        </div>
      )}
      {!isExpired && !isPending && (
        <div className="flex w-full justify-center">
          <SubmitButton
            isDisabled={!selected}
            isVoted={voted}
            onReceiptClick={debouncedOpenReceiptLink}
            onVoteClick={debouncedVote}
          />
        </div>
      )}
    </fieldset>
  );
}
