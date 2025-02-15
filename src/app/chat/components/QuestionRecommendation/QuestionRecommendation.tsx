import Title from './Title';
import { Level } from '../../data';
import LevelCard from '../LevelCard';
import Questions from '../Questions/Questions';
import useRecommendQuestions from '../../hooks/useRecommendQuestions';
import Image from 'next/image';
import { Icon } from '@/assets/icons';
import useScreen from '@/hooks/useScreen';

interface QuestionRecommendationProps {
  handleSubmit: (text: string) => void;
  handleViewChange: () => void;
}

const QuestionRecommendation = ({ handleSubmit, handleViewChange }: QuestionRecommendationProps) => {
  const { questions, selectedLevel, setSelectedLevel } = useRecommendQuestions();
  const { isMobile } = useScreen();

  const handleClick = (text: string) => {
    handleSubmit(text);
  };

  return (
    <div className="relative flex size-full flex-1 flex-col items-center justify-center gap-[3.2rem] pb-[13.8rem]">
      <Title className="z-10" />
      <div className="z-10 flex w-full flex-col items-center gap-[1rem]">
        <div className="flex gap-[1.2rem]">
          {Object.entries(Level).map(([key, value]) => (
            <LevelCard
              key={key}
              level={value}
              isSelected={selectedLevel === value}
              onClick={() => setSelectedLevel(value)}
            />
          ))}
        </div>
        <Questions questions={questions} handleClick={handleClick} />
        <button
          onClick={handleViewChange}
          className="bg-system-light/60 flex items-center gap-[0.4rem] rounded-full border border-blue-100 py-[0.6rem] pl-[1.2rem] pr-[0.8rem] text-body-2-medium text-gray-700 hover:shadow-normal"
        >
          <span>질문 더보기</span>
          <Icon name="ArrowRight" size={20} />
        </button>
      </div>
      <Image
        className="absolute left-1/2 top-[calc(50%-24rem)] -translate-x-1/2 -translate-y-1/2"
        src="/images/chat/block.gif"
        alt="block"
        width={isMobile ? 408 : 596}
        height={isMobile ? 408 : 596}
      />
    </div>
  );
};

export default QuestionRecommendation;
