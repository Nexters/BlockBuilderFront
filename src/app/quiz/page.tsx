'use client';

import { useEffect, useState } from 'react';
import Quiz from './Quiz';
import Result from './Result';
import { userStorage } from '@/hooks/useUser';

type QuizState = 'Quiz' | 'Result';

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
      setState('Quiz');
    }
  }, []);

  if (state === 'Quiz') {
    return (
      <Quiz
        onCorrect={() => setCorrectCount(correctCount + 1)}
        onSubmit={(answer: string) => setSubmittedAnswer((prev) => [...prev, answer])}
        onFinish={() => {
          setIsChecking(true);
          setState('Result');
        }}
      />
    );
  }

  if (state === 'Result') {
    return <Result isChecking={isChecking} correctCount={correctCount} submittedAnswer={submittedAnswer} />;
  }
};

export default QuizPage;
