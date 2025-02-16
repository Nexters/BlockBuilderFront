import { useCallback, useEffect, useState } from 'react';
import Image from 'next/image';
import { contentMap, getRecommendations } from './data';
import Recommendation from './Recommendation';
import Explanation from './Explanation';
import { userStorage } from '@/hooks/useUser';

const Result = ({
  isChecking = false,
  correctCount,
  submittedAnswer,
}: {
  isChecking?: boolean;
  correctCount: number;
  submittedAnswer: string[];
}) => {
  const [loading, setLoading] = useState(true);

  const onFinish = useCallback(() => {
    setLoading(false);
    userStorage.saveData({ type: 'quiz', data: { correctCount, submittedAnswer } });
  }, [correctCount, submittedAnswer]);

  useEffect(() => {
    if (isChecking) {
      setTimeout(() => {
        onFinish();
      }, 3000);
    } else {
      onFinish();
    }
  }, [onFinish, isChecking]);

  const { level, image, recommendations } = getRecommendations(correctCount);

  if (isChecking && loading) {
    return (
      <div className="scrollbar-hide h-screen w-full overflow-auto px-[4rem] pb-[8.6rem] pt-[21.8rem] mobile:h-[calc(100vh-56px)] mobile:px-[2rem] mobile:pt-[13.4rem]">
        <div className="flex h-[27.2rem] w-full flex-col items-center gap-[2rem]">
          <div className="flex flex-col items-center gap-[0.8rem]">
            <h1 className="whitespace-pre-wrap text-center text-title-1-semibold">잠시만 기다려주세요!</h1>
            <p className="text-body-2-regular text-gray-700">열심히 점수를 채점하고 있어요!</p>
          </div>
          <Image src="/images/chat/block.gif" alt="block" width={300} height={300} />
        </div>
      </div>
    );
  }
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col items-center gap-[7rem] overflow-auto px-[4rem] pb-[8.6rem] pt-[11.2rem] mobile:h-[calc(100vh-56px)] mobile:gap-[2rem] mobile:px-[2rem] mobile:py-[2.8rem]">
      <div className="flex w-full max-w-[68.4rem] flex-col items-center">
        <div className="flex flex-col gap-[0.6rem] text-center">
          <p className="text-title-3-medium text-gray-700">나의 블록체인 지식 수준은</p>
          <h1 className="text-headline-2-bold mobile:text-headline-2-bold">{level}</h1>
        </div>
        <Image src={image} alt="result" width={200} height={200} />
        <div className="flex flex-col items-center gap-[1.4rem]">
          <p className="text-title-3-medium">
            <span className="pr-[0.6rem] text-blue-400">{correctCount}</span>문제를 맞혔어요!
          </p>
          <Explanation submittedAnswer={submittedAnswer} />
        </div>
      </div>
      <div className="flex w-full max-w-[68.4rem] flex-col gap-[2.4rem]">
        <p className="text-title-1-semibold">아래 활동을 추천해드릴게요!</p>
        <div className="flex w-full gap-[1.5rem] mobile:flex-col">
          {recommendations.map((content) => (
            <Recommendation key={content} {...contentMap[content]} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Result;
