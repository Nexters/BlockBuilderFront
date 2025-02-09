import Title from './Title';
import { Level } from '../../data';
import LevelCard from '../LevelCard';
import Questions from '../Questions/Questions';
import useRecommendQuestions from '../../hooks/useRecommendQuestions';
import Image from 'next/image';

interface QuestionRecommendationProps {
  handleSubmit: (text: string) => void;
}

const QuestionRecommendation = ({ handleSubmit }: QuestionRecommendationProps) => {
  const { questions, selectedLevel, setSelectedLevel } = useRecommendQuestions();

  const handleClick = (text: string) => {
    handleSubmit(text);
  };

  return (
    <div className="relative flex size-full flex-1 flex-col items-center justify-center gap-[3.2rem] pb-[13.8rem]">
      <Title className="z-10" />
      <div className="z-10 flex w-full flex-col items-center gap-[2rem] overflow-hidden">
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
      </div>
      <Image
        className="absolute left-1/2 top-[calc(50%-24rem)] -translate-x-1/2 -translate-y-1/2"
        src="/images/chat/block.gif"
        alt="block"
        width={596}
        height={596}
      />
    </div>
  );
};

export default QuestionRecommendation;
