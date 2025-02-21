import { DrawerDialog } from '@/components/ResponsiveContainer/common/DrawerDialog';
import { questions } from './data';
import clsx from 'clsx';
import useQuizPageActions from './hooks/useQuizPageActions';

const Explanation = ({ submittedAnswer }: { submittedAnswer: string[] }) => {
  const { handleExplanationClick } = useQuizPageActions();

  return (
    <DrawerDialog
      trigger={
        <button
          className="rounded-full bg-blue-400 px-[1.6rem] py-[0.6rem] text-body-2-semibold text-system-light"
          onClick={handleExplanationClick}
        >
          해설보기
        </button>
      }
      title="문제와 해설"
      description="풀이 결과와 해설을 확인해보세요"
    >
      <div className="flex flex-col gap-[2rem]">
        {questions.map((question) => (
          <ExplanationItem key={question.id} {...question} submittedAnswer={submittedAnswer[question.id - 1]} />
        ))}
      </div>
    </DrawerDialog>
  );
};

export default Explanation;

const ExplanationItem = ({
  id,
  question,
  options,
  correctAnswer,
  submittedAnswer,
  explanation,
}: {
  id: number;
  question: string;
  options: string[];
  correctAnswer: string;
  submittedAnswer: string;
  explanation: string;
}) => {
  return (
    <div className="flex flex-col gap-[2rem] rounded-[1.2rem] border-2 border-gray-200 px-[3rem] py-[2.4rem]">
      <p className="break-keep text-title-2-semibold">
        {id}. {question}
      </p>
      <div className="flex flex-col gap-[1rem]">
        {options.map((option) => (
          <div
            key={option}
            className={clsx(
              'break-keep rounded-[0.8rem] border border-gray-300 px-[1.8rem] py-[1.2rem] text-body-1-medium text-gray-800',
              option === submittedAnswer && submittedAnswer !== correctAnswer && 'bg-red-200 dark:bg-red-800',
              option === correctAnswer && 'bg-green-100 text-body-1-semibold dark:bg-green-800'
            )}
          >
            <p>{option}</p>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[0.4rem]">
        <p className="text-title-2-semibold">해설</p>
        <div className="h-[1px] w-full bg-gray-400" />
        <p className="whitespace-pre-wrap break-keep p-[0.4rem] text-body-1-medium text-gray-800">{explanation}</p>
      </div>
    </div>
  );
};
