import { Icon, IconType } from '@/assets/icons';
import clsx from 'clsx';
import { memo } from 'react';

const ToolButton = memo(({ icon, size = 20, onClick }: { icon: IconType; size?: number; onClick?: () => void }) => {
  return (
    <button
      className={clsx(
        'flex size-[2.8rem] items-center justify-center text-gray-500',
        'hover:rounded-[0.4rem] hover:border hover:border-gray-300 hover:bg-gray-200'
      )}
      onClick={onClick}
    >
      <Icon width={size} height={size} name={icon} className="shrink-0" />
    </button>
  );
});

ToolButton.displayName = 'ToolButton';

export default ToolButton;
