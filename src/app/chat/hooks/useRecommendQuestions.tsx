import { useEffect, useState } from 'react';
import { RecommendQuestion, Level } from '../data';

const useRecommendQuestions = () => {
  const [questionsData, setQuestionsData] = useState<RecommendQuestion[]>();
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.BEGINNER);

  useEffect(() => {
    const fetchQuestions = async () => {
      const response = await fetch(`/api/info/questions`);
      const data = await response.json();
      setQuestionsData(data);
    };

    fetchQuestions();
  }, []);

  return {
    questions: questionsData?.filter((item) => item.level === selectedLevel) ?? [],
    selectedLevel,
    setSelectedLevel,
  };
};

export default useRecommendQuestions;
