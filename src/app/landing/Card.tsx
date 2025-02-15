'use client';

import { userStorage } from '@/hooks/useUser';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import { useCallback, useMemo } from 'react';

type CardProps = {
  type: 'quiz' | 'coin' | 'nft';
  title: string;
  description: string;
  url: string;
};

const Card = ({ type, title, description, url }: CardProps) => {
  const result = useMemo(() => {
    switch (type) {
      case 'quiz':
        return userStorage.getQuizResult();
      case 'coin':
        return userStorage.getCoin();
      case 'nft':
        return userStorage.getNft();
    }
  }, [type]);

  const getText = useCallback(() => {
    switch (type) {
      case 'quiz':
        if (result) {
          return '결과보기';
        }
        return '퀴즈풀기';
      case 'coin':
      case 'nft':
        if (result) {
          return '바로가기';
        }
        return '생성하기';
    }
  }, [type, result]);

  return (
    <Link
      href={url}
      className={clsx(
        'relative flex h-[20.4rem] w-full max-w-[68.4rem] flex-col justify-between rounded-[1.2rem] p-[2.4rem] mobile:h-[18rem]',
        type === 'quiz' ? 'bg-blue-200' : 'bg-blue-100'
      )}
    >
      <div className="flex flex-col gap-[0.6rem]">
        <p className="text-title-2-semibold">{title}</p>
        <p className="text-body-2-regular text-gray-800">{description}</p>
        {type === 'quiz' && result && (
          <p className="text-body-2-medium text-blue-400">
            {result.correctCount >= 4 ? '고급' : result.correctCount >= 2 ? '중급' : '초급'}
          </p>
        )}
        {type !== 'quiz' && <p className="text-body-2-medium text-blue-400">{result ? 1 : 0}/1</p>}
      </div>
      <p className="text-system-light w-fit rounded-full bg-gray-900 px-[1.6rem] py-[0.6rem] text-body-2-semibold">
        {getText()}
      </p>
      <Image
        src={type === 'quiz' ? '/images/landing/graphic-quiz.png' : '/images/landing/graphic-coin.png'}
        alt={`${type} graphic`}
        fill
        className="h-[100%] w-[100%] object-cover"
      />
    </Link>
  );
};

export default Card;
