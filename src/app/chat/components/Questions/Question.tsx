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
    <div key={id} className={clsx('flex h-[13.1rem] items-center', isPrev && 'justify-end')}>
      <button
        className={clsx(
          'flex flex-col gap-[0.8rem] rounded-[1.2rem] p-[1.6rem] text-start transition-transform hover:shadow-normal',
          isActive
            ? 'hover:bg-gradient-card-1 dark:hover:bg-gradient-card-1-dark h-full w-[22rem] bg-blue-200'
            : 'bg-opacity-normal/60 dark:bg-opacity-normal/30 h-[10.6rem] w-[18.6rem] border border-blue-100'
        )}
        onClick={onClick}
      >
        <p className="text-body-3-semibold text-blue-500">{category_name}</p>
        <p className={clsx(isActive ? 'line-clamp-3 text-body-1-medium' : 'line-clamp-2 text-body-2-medium')}>
          {question}
        </p>
      </button>
    </div>
  );
};

export default Question;
