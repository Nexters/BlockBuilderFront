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
    <div className="flex size-full items-center justify-center">
      <div className="h-full max-h-[60rem] w-[40rem] p-[2rem]">
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
