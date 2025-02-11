import { useEffect, useState } from 'react';
import { RecommendQuestion, Level } from '../data';
import { fetchJson } from '../../../utils/api';

const useRecommendQuestions = () => {
  const [questionsData, setQuestionsData] = useState<RecommendQuestion[]>();
  const [selectedLevel, setSelectedLevel] = useState<Level>(Level.BEGINNER);

  useEffect(() => {
    const fetchQuestions = async () => {
      const data = await fetchJson<RecommendQuestion[]>('/api/info/questions');
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
