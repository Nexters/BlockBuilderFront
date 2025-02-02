import { useTheme } from 'next-themes';
import { useMount } from '@/hooks/useMount';
import clsx from 'clsx';
import { Icon } from '@/assets/icons';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  return (
    <div className=" w-[100%] flex p-[0.4rem] bg-gray-200 rounded-full">
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'w-[100%] flex items-center justify-center px-[20px] py-[4px] gap-[6px] rounded-full',
          theme === 'light' ? 'bg-white' : ''
        )}
      >
        <Icon name={'LightMode'} className={theme === 'light' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={clsx('text-body-1-medium', theme === 'light' ? 'text-gray-800' : 'text-gray-500')}>Light</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'w-[100%] flex items-center justify-center px-[20px] py-[4px] gap-[6px] rounded-full',
          theme === 'dark' ? 'bg-dark' : ''
        )}
      >
        <Icon name={'DarkMode'} className={theme === 'dark' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={clsx('text-body-1-medium', theme === 'dark' ? 'text-gray-800' : 'text-gray-500')}>Dark</span>
      </button>
    </div>
  );
}
