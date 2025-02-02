import { useState } from 'react';
import Title from '../Title';
import { Level } from '../../data';
import LevelCard from '../LevelCard';
import Questions from '../Questions/Questions';

interface QuestionRecommendationProps {
  handleSubmit: (text: string) => void;
}

const QuestionRecommendation = ({ handleSubmit }: QuestionRecommendationProps) => {
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.BEGINNER);

  const handleClick = (text: string) => {
    handleSubmit(text);
  };

  return (
    <div className="flex-1 flex size-full flex-col items-center justify-center gap-[2.2rem] pb-[13.8rem]">
      <Title />
      <div className="flex flex-col items-center gap-[3rem]">
        <div className="flex gap-[1.8rem]">
          {Object.entries(Level).map(([key, value]) => (
            <LevelCard
              key={key}
              level={value}
              isSelected={selectedLevel === value}
              onClick={() => setSelectedLevel(value)}
              image={`/images/chat/${key.toLowerCase()}.png`}
            />
          ))}
        </div>
        <Questions handleClick={handleClick} />
      </div>
    </div>
  );
};

export default QuestionRecommendation;
