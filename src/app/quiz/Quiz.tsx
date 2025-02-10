import { useState } from 'react';
import { questions } from './data';
import clsx from 'clsx';

const Quiz = ({ onCorrect, onFinish }: { onCorrect: () => void; onFinish: () => void }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const question = questions[currentQuestion];

  const onSelectAnswer = (answer: string) => {
    if (selectedAnswer === answer) {
      setSelectedAnswer(null);
    } else {
      setSelectedAnswer(answer);
    }
  };

  const onSubmit = (answer: string | null) => {
    if (answer === null) return;
    if (answer === question.correctAnswer) {
      onCorrect();
    }
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="flex size-full flex-col justify-between gap-[3rem]">
      <h1 className="break-keep text-title-1-semibold">{`${question.id}. ${question.question}`}</h1>
      <div className="flex flex-col gap-[3rem]">
        <div className="flex flex-col gap-[1rem]">
          {question.options.map((option) => (
            <button
              className={clsx(
                'flex h-[7.2rem] w-full items-center justify-center whitespace-pre-wrap break-keep rounded-[1.2rem] border border-blue-100 px-[1.2rem] py-[0.8rem] text-title-3-regular hover:bg-blue-100',
                selectedAnswer === option && 'border-blue-100 bg-blue-100'
              )}
              key={option}
              onClick={() => onSelectAnswer(option)}
            >
              {option}
            </button>
          ))}
        </div>
        <button
          className={clsx(
            'flex h-[7.2rem] w-full items-center justify-center rounded-[1.2rem] bg-blue-400 py-[0.5rem] text-title-2-semibold text-white hover:bg-blue-500 disabled:bg-gray-200 disabled:text-gray-500'
          )}
          disabled={selectedAnswer === null}
          onClick={() => onSubmit(selectedAnswer)}
        >
          {currentQuestion < questions.length - 1 ? 'Next' : 'Finish'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
