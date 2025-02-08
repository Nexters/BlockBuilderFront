import { Icon, IconType } from '@/assets/icons';
import { useMount } from '@/hooks/useMount';
import { Menu, useNavigation } from '@/hooks/useNavigation';
import { capitalize } from '@/utils/string';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export default function Tablet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="min-w-[60px] w-[60px] h-[100vh] pt-[20px] pb-[20px] flex flex-col items-center">
        <button className="w-[36px] h-[36px] bg-[#6390FA] rounded-[10px]"></button>
        <nav className="h-[100%] mt-[26px] mb-[72px] flex flex-col justify-between">
          <ul className="flex flex-col items-center gap-[10px]">
            <NavigationItem menu="chat" />
            <NavigationItem menu="news" />
            <NavigationItem menu="poll" />
          </ul>
          <ThemeSwitch />
        </nav>
      </aside>
      <main className="w-full">{children}</main>
    </div>
  );
}

const NavigationItem = ({ menu }: { menu: Menu }) => {
  const { isActiveMenu, handleChangeMenu } = useNavigation();

  return (
    <li
      className={clsx(
        'w-[36px] h-[36px] rounded-[10px] flex justify-center items-center',
        isActiveMenu(menu) && 'bg-gray-200'
      )}
      onClick={handleChangeMenu(menu)}
    >
      <Icon name={capitalize(menu) as IconType} className={isActiveMenu(menu) ? 'fill-gray-900' : 'fill-gray-500'} />
    </li>
  );
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const isLightMode = theme === 'light';

  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  return (
    <button
      className="size-[36px] bg-gray-200 rounded-[10px] flex justify-center items-center"
      onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
    >
      <Icon name={isLightMode ? 'LightMode' : 'DarkMode'} className={isLightMode ? 'fill-gray-900' : 'fill-gray-500'} />
    </button>
  );
};
