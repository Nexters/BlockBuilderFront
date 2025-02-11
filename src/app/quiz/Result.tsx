import { useEffect, useState } from 'react';
import Image from 'next/image';
import { contentMap, getRecommendations } from './data';
import Recommendation from './Recommendation';

const Result = ({ correctCount }: { correctCount: number }) => {
  const [loading, setLoading] = useState(true);
  const [isExplanationOpen, setIsExplanationOpen] = useState(false);

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
          <h1 className="whitespace-pre-wrap text-center text-headline-2-bold mobile:text-headline-3-bold">
            잠시만 기다려주세요!
          </h1>
          <p className="text-title-3-medium">열심히 채점을 하고 있어요</p>
        </div>
        <Image src="/images/chat/block.gif" alt="block" width={300} height={300} />
      </div>
    );
  }
  return (
    <div className="flex size-full flex-col items-center gap-[3rem] mobile:gap-[2rem]">
      <div className="flex flex-col text-center">
        <p className="text-title-2-medium">당신은 블록체인</p>
        <h1 className="text-headline-1-bold mobile:text-headline-2-bold">{level}</h1>
        <p className="text-title-2-medium">입니다!</p>
      </div>
      <div className="flex gap-[1.6rem]">
        <p className="text-title-1-semibold">
          <span className="pr-[0.4rem] text-blue-500">{correctCount}</span>문제를 맞히셨어요!
        </p>
        <button
          className="rounded-full bg-blue-500 px-[1.6rem] py-[0.6rem] text-body-2-semibold text-white"
          onClick={() => setIsExplanationOpen(true)}
        >
          해설 보기
        </button>
      </div>
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
