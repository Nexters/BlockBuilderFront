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
      <h1 className="text-title-1-semibold">{`${question.id}. ${question.question}`}</h1>
      <div className="flex flex-col gap-[3rem]">
        <div className="flex h-[24rem] flex-col gap-[1rem]">
          {question.options.map((option) => (
            <button
              className={clsx(
                'flex w-full flex-1 items-center justify-center rounded-[1.2rem] border border-blue-100 py-[0.5rem] text-title-3-regular',
                selectedAnswer === option && 'border-blue-500 bg-blue-500 text-white'
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
            'flex h-[5.4rem] w-full items-center justify-center rounded-[1.2rem] bg-blue-200 py-[0.5rem] text-title-2-semibold hover:bg-blue-300 disabled:bg-gray-300'
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
