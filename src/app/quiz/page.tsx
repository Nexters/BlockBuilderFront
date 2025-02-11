'use client';

import { useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import Entry from './Entry';

type QuizState = 'Entry' | 'Quiz' | 'Result';

const QuizPage = () => {
  const [state, setState] = useState<QuizState>('Entry');
  const [correctCount, setCorrectCount] = useState(0);

  return (
    <div className="flex size-full items-center justify-center mobile:h-[calc(100vh-56px)]">
      <div className="size-full max-w-[72rem] px-[2rem] py-[4rem] mobile:pt-[2rem] tablet:max-h-[70rem] desktop:max-h-[70rem]">
        {state === 'Entry' && <Entry onStart={() => setState('Quiz')} />}
        {state === 'Quiz' && (
          <Quiz onCorrect={() => setCorrectCount(correctCount + 1)} onFinish={() => setState('Result')} />
        )}
        {state === 'Result' && <Result correctCount={correctCount} />}
      </div>
    </div>
  );
};

export default QuizPage;
