import clsx from 'clsx';
import { Level, LevelMap } from '../../data';

const LevelCard = ({ level, isSelected, onClick }: { level: Level; isSelected: boolean; onClick: () => void }) => {
  return (
    <button
      className={clsx(
        'flex h-[3rem] w-[4.9rem] flex-col items-center justify-center gap-[0.2rem] rounded-[0.6rem] border',
        isSelected
          ? 'border-blue-400 bg-gray-100 text-blue-500 shadow-normal'
          : 'border-blue-100 bg-white/60 text-gray-500'
      )}
      onClick={onClick}
    >
      <span className="text-body-2-semibold">{LevelMap[level]}</span>
    </button>
  );
};

export default LevelCard;
