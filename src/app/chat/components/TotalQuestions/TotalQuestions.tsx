import { useEffect, useState } from 'react';
import { Level, LevelMap, QuestionCategory, QuestionCategoryMap, Questions } from '../../data';
import clsx from 'clsx';
import { fetchJson } from '@/utils/api';
import useChatPageActions from '../../hooks/useChatPageActions';

interface TotalQuestionsProps {
  handleSubmit: (text: string) => void;
}

const TotalQuestions = ({ handleSubmit }: TotalQuestionsProps) => {
  const [tab, setTab] = useState<Level>(Level.BEGINNER);
  const [filter, setFilter] = useState<QuestionCategory>(QuestionCategoryMap[0]);
  const [questions, setQuestions] = useState<Questions>([]);
  const { handleTotalLevelClick, handleTotalCategoryClick, handleTotalQuestionSelect } = useChatPageActions();
  useEffect(() => {
    const fetchQuestions = async () => {
      const questions = await fetchJson<Questions>('/api/info/level/questions');
      setQuestions(questions);
    };
    fetchQuestions();
  }, [tab, filter]);

  const handleClick = (text: string) => {
    handleSubmit(text);
  };

  return (
    <div className="mx-auto flex size-full flex-col gap-[2.8rem] px-[4rem] pt-[6.4rem] mobile:px-[2rem] mobile:py-[4rem] desktop:max-w-[76.4rem]">
      <h1 className="text-title-1-semibold">단계별 질문 추천</h1>
      <div className="flex h-[3rem] w-full">
        {Object.entries(Level).map(([key, value]) => (
          <button
            key={key}
            className={clsx(
              'flex flex-1 items-start justify-center',
              tab === value ? 'border-b-2 border-blue-400 text-blue-500' : 'border-b border-blue-100 text-gray-700'
            )}
            onClick={() => {
              setTab(value);
              handleTotalLevelClick(value);
            }}
          >
            <h2 className="text-body-2-semibold">{LevelMap[value]}</h2>
          </button>
        ))}
      </div>
      <div className="flex w-full flex-wrap gap-[0.8rem]">
        {Object.entries(QuestionCategoryMap).map(([key, value]) => (
          <button
            key={key}
            className={clsx(
              'flex w-fit items-start justify-center rounded-[0.8rem] px-[1.6rem] py-[0.6rem]',
              filter === value
                ? 'bg-system-dark text-body-2-semibold text-gray-100'
                : 'border border-blue-100 bg-system-light px-[1.5rem] py-[0.5rem] text-body-2-medium text-gray-700'
            )}
            onClick={() => {
              setFilter(value);
              handleTotalCategoryClick(value);
            }}
          >
            <h2 className="w-fit text-body-2-semibold">{value}</h2>
          </button>
        ))}
      </div>
      <div className="-m-[0.6rem] grid h-full flex-1 grid-cols-1 overflow-y-auto pb-[15.6rem] scrollbar-hide mobile:pb-[10rem] tablet:grid-cols-2 desktop:grid-cols-3">
        {questions
          .find((question) => question.level === tab)
          ?.questions.filter((question) => filter === '전체' || question.category_name.trim() === filter)
          .map((question) => (
            <button
              key={question.id}
              className="m-[0.6rem] flex h-[13.1rem] flex-col gap-[0.9rem] rounded-[1.2rem] border border-blue-100 bg-system-light/60 p-[1.6rem] text-start hover:bg-gradient-card-2 hover:shadow-normal dark:hover:bg-gradient-card-2-dark"
              onClick={() => {
                handleClick(question.question);
                handleTotalQuestionSelect(question.question);
              }}
            >
              <p className="text-body-3-semibold text-blue-500">{question.category_name}</p>
              <p className="line-clamp-3 max-w-[18.8rem] text-body-1-medium">{question.question}</p>
            </button>
          ))}
      </div>
    </div>
  );
};

export default TotalQuestions;
