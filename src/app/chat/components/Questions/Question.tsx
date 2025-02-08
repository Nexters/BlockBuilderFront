import clsx from 'clsx';
import { QuestionCategory } from '../../data';

interface QuestionProps {
  id: number;
  category_name: QuestionCategory;
  question: string;
  isActive: boolean;
  isPrev: boolean;
  onClick: () => void;
}

const Question = ({ id, category_name, question, isActive, isPrev, onClick }: QuestionProps) => {
  return (
    <div key={id} className={clsx('flex h-full items-center', isPrev && 'justify-end')}>
      <button
        className={clsx(
          'flex h-full flex-col gap-[0.6rem] rounded-[0.8rem] px-[1.6rem] py-[2rem] text-start transition-transform',
          isActive ? 'h-full w-[27rem] bg-blue-100' : 'h-[11.4rem] w-[23rem] bg-gray-200'
        )}
        onClick={onClick}
      >
        <p className="text-body-3-semibold text-blue-500">{category_name}</p>
        <p className="text-body-1-medium">{question}</p>
      </button>
    </div>
  );
};

export default Question;
