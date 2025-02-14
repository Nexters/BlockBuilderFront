'use client';

import { useState } from 'react';
import RadioOption from './RadioOption';
import { userStorage } from '@/hooks/useUser';
import { postParticipateToVote } from '../../api/postParticipateToVote';
import { useMutation } from '@tanstack/react-query';

interface PollProps {
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
  topicNo,
  title,
  voterCount,
  firstOption,
  firstOptionPercentage,
  secondOption,
  secondOptionPercentage,
  voted,
  onVoted,
}: PollProps) {
  const eoa = userStorage.getUserData()?.token || '';
  const [selected, setSelected] = useState<number>(0);

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

  const handleSubmit = () => {
    participateToVote({ eoa, topicNo, voteOption: selected });
  };

  return (
    <fieldset className="px-[3rem] py-[2.4rem]">
      <p className="text-title-3-semibold text-gray-900">{title}</p>
      <div className="mt-[0.6rem] flex justify-between">
        <p className="text-body-2-medium text-gray-700">{voterCount}명 참여중</p>
      </div>
      <div className="mb-[4rem] mt-[3rem] flex flex-col gap-[2rem]">
        <RadioOption
          name="blockchain"
          value={1}
          label={firstOption}
          percentage={firstOptionPercentage}
          checked={selected === 1}
          onChange={handleChange}
          disabled={voted}
        />
        <RadioOption
          name="blockchain"
          value={2}
          label={secondOption}
          percentage={secondOptionPercentage}
          checked={selected === 2}
          onChange={handleChange}
          disabled={voted}
        />
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="h-[4.8rem] w-[40rem] rounded-[0.8rem] bg-blue-400 text-body-1-semibold text-gray-100"
          onClick={handleSubmit}
          disabled={!selected}
        >
          투표하기
        </button>
      </div>
    </fieldset>
  );
}
