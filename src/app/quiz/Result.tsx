import { useEffect, useState } from 'react';
import Image from 'next/image';
import { contentMap, getRecommendations } from './data';
import Recommendation from './Recommendation';

const Result = ({ correctCount }: { correctCount: number }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  const { level, recommendations } = getRecommendations(correctCount);

  if (loading) {
    return (
      <div className="flex size-full flex-col items-center gap-[3rem]">
        <div className="flex flex-col items-center gap-[1.6rem]">
          <h1 className="whitespace-pre-wrap text-center text-title-1-semibold">잠시만 기다려주세요!</h1>
          <p className="text-body-1-medium">열심히 채점을 하고 있어요</p>
        </div>
        <Image src="/images/chat/block.gif" alt="block" width={300} height={300} />
      </div>
    );
  }
  return (
    <div className="flex size-full flex-col items-center gap-[3rem]">
      <div className="flex flex-col text-center">
        <p className="text-title-3-semibold">당신은 블록체인</p>
        <h1 className="text-[40px] text-title-1-semibold">{level}</h1>
        <p className="text-title-3-semibold">입니다!</p>
      </div>
      <p className="text-title-1-semibold">
        <span className="pr-[0.4rem] text-blue-500">{correctCount}</span>문제를 맞추셨어요!
      </p>
      <p className="text-title-2-semibold">아래 활동을 추천드릴게요!</p>
      <div className="flex w-full flex-1 gap-[1.6rem] mobile:flex-col">
        {recommendations.map((content) => (
          <Recommendation
            key={content}
            isAvailable={content !== 'nft' && content !== 'coin'}
            {...contentMap[content]}
          />
        ))}
      </div>
    </div>
  );
};

export default Result;
