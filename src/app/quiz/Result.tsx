import { useEffect, useState } from 'react';
import Image from 'next/image';

const Result = ({ correctCount }: { correctCount: number }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const level = correctCount >= 3 ? '숙련자' : '초보자';

  if (loading) {
    return (
      <div className="flex size-full items-center justify-center">
        <h1 className="text-title-1-semibold">당신의 성적은!??</h1>
        <Image src="/images/chat/block.gif" alt="block" width={200} height={200} />
      </div>
    );
  }
  return (
    <div className="flex size-full flex-col items-center justify-between gap-[3rem]">
      <div className="flex flex-col gap-[1rem] text-center">
        <p className="text-title-1-semibold">당신은 블록체인</p>
        <h1 className="text-[40px] text-title-1-semibold">{level}</h1>
        <p className="text-title-1-semibold">입니다!</p>
      </div>
      <p>아래 활동을 추천드려요</p>
      <p>{correctCount}문제를 맞추셨어요!</p>
    </div>
  );
};

export default Result;
