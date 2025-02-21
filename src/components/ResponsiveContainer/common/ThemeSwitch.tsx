import { useTheme } from 'next-themes';
import { useMount } from '@/hooks/useMount';
import clsx from 'clsx';
import { Icon } from '@/assets/icons';
import useLogging from '@/hooks/useLogging';

export default function ThemeSwitch() {
  const { theme, setTheme } = useTheme();
  const mounted = useMount();
  const { sendLog } = useLogging();

  const handleThemeChange = (theme: string) => {
    setTheme(theme);
    sendLog({ eventName: '테마_변경', eventProperties: { 변경_테마: theme } });
  };

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-[100%] rounded-full bg-gray-200 p-[0.4rem]">
      <button
        onClick={() => handleThemeChange('light')}
        className={clsx(
          'flex w-[100%] items-center justify-center gap-[6px] rounded-full px-[20px] py-[4px]',
          theme === 'light' ? 'bg-white' : ''
        )}
      >
        <Icon name={'LightMode'} className={theme === 'light' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={clsx('text-body-1-medium', theme === 'light' ? 'text-gray-800' : 'text-gray-500')}>Light</span>
      </button>
      <button
        onClick={() => handleThemeChange('dark')}
        className={clsx(
          'flex w-[100%] items-center justify-center gap-[6px] rounded-full px-[20px] py-[4px]',
          theme === 'dark' ? 'bg-dark' : ''
        )}
      >
        <Icon name={'DarkMode'} className={theme === 'dark' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={clsx('text-body-1-medium', theme === 'dark' ? 'text-gray-800' : 'text-gray-500')}>Dark</span>
      </button>
    </div>
  );
}
