import { useState } from 'react';
import { questions } from './data';
import clsx from 'clsx';
import ProgressBar from './ProgressBar';

const Quiz = ({
  onCorrect,
  onSubmit,
  onFinish,
}: {
  onCorrect: () => void;
  onSubmit: (answer: string) => void;
  onFinish: () => void;
}) => {
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

  const onAnswerSubmit = (answer: string | null) => {
    if (answer === null) return;
    if (answer === question.correctAnswer) {
      onCorrect();
    }
    onSubmit(answer);
    setSelectedAnswer(null);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      onFinish();
    }
  };

  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col items-center gap-[4rem] overflow-auto px-[4rem] py-[5.4rem] mobile:h-[calc(100vh-56px)] mobile:px-[2rem] mobile:py-[4rem]">
      <div className="flex w-full max-w-[68.4rem] flex-col gap-[10.6rem] mobile:gap-[3rem]">
        <ProgressBar current={currentQuestion + 1} total={questions.length} />
        <div className="flex flex-col gap-[1.2rem]">
          <p className="text-body-1-semibold text-blue-400">Quiz {question.id}/5</p>
          <h1 className="break-keep text-title-1-bold">{question.question}</h1>
        </div>
      </div>
      <div className="flex w-full max-w-[68.4rem] flex-col items-center gap-[3rem]">
        <div className="flex w-full flex-col gap-[1.2rem]">
          {question.options.map((option) => (
            <button
              className={clsx(
                'flex h-[7.2rem] w-full items-center justify-center whitespace-pre-wrap break-keep rounded-[0.8rem] border border-blue-100 px-[2rem] py-[1rem] text-title-3-medium hover:shadow-normal',
                selectedAnswer === option ? 'border-blue-100 bg-blue-100 text-blue-400' : 'bg-system-light/60'
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
            'text-system-light flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 text-body-1-semibold disabled:bg-gray-300 disabled:text-gray-600'
          )}
          disabled={selectedAnswer === null}
          onClick={() => onAnswerSubmit(selectedAnswer)}
        >
          {currentQuestion < questions.length - 1 ? '다음' : '제출'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;
