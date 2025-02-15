'use client';

import { useState } from 'react';
import RadioOption from './RadioOption';
import { userStorage } from '@/hooks/useUser';
import { postParticipateToVote } from '../../api/postParticipateToVote';
import { useMutation } from '@tanstack/react-query';
import SubmitButton from './SubmitButton';
import { useToast } from '@/contexts/ToastContext';
import { useDebounce } from '@/hooks/useDebounce';

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

  const { showToast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(Number(e.target.value));
  };

  const { mutate: participateToVote } = useMutation({
    mutationFn: postParticipateToVote,
    onSuccess: () => {
      onVoted?.();
    },
    onError: (error) => {
      console.error(error);
    },
  });

  const handleVote = () => {
    participateToVote({ eoa, topicNo, voteOption: selected });
    showToast('투표가 완료되었어요!');
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
      {!isExpired && (
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
