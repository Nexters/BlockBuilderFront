'use client';

import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Entry from './Entry';
import { userStorage } from '@/hooks/useUser';

type QuizState = 'Entry' | 'Quiz' | 'Result';

const QuizPage = () => {
  const [state, setState] = useState<QuizState | null>(null);
  const [correctCount, setCorrectCount] = useState(0);
  const [submittedAnswer, setSubmittedAnswer] = useState<string[]>([]);
  const [isChecking, setIsChecking] = useState(false);

  useEffect(() => {
    const quizResult = userStorage.getData('quiz');

    if (quizResult) {
      setCorrectCount(quizResult.correctCount);
      setSubmittedAnswer(quizResult.submittedAnswer);
      setState('Result');
    } else {
      setState('Entry');
    }
  }, []);

  return (
    <div className="flex size-full items-center justify-center mobile:h-[calc(100vh-56px)]">
      <div className="size-full max-w-[72rem] px-[2rem] py-[4rem] mobile:pt-[2rem] tablet:max-h-[70rem] desktop:max-h-[70rem]">
        {state === 'Entry' && <Entry onStart={() => setState('Quiz')} />}
        {state === 'Quiz' && (
          <Quiz
            onCorrect={() => setCorrectCount(correctCount + 1)}
            onSubmit={(answer: string) => setSubmittedAnswer((prev) => [...prev, answer])}
            onFinish={() => {
              setIsChecking(true);
              setState('Result');
            }}
          />
        )}
        {state === 'Result' && (
          <Result isChecking={isChecking} correctCount={correctCount} submittedAnswer={submittedAnswer} />
        )}
      </div>
    </div>
  );
};

export default QuizPage;
