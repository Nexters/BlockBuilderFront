import { Icon, IconType } from '@/assets/icons';
import { useMount } from '@/hooks/useMount';
import { Menu, useNavigation } from '@/hooks/useNavigation';
import { capitalize } from '@/utils/string';
import clsx from 'clsx';
import { useTheme } from 'next-themes';

export default function Tablet({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="flex h-[100vh] w-[60px] min-w-[60px] flex-col items-center pb-[20px] pt-[20px]">
        <button className="h-[36px] w-[36px] rounded-[10px] bg-[#6390FA]"></button>
        <nav className="mb-[72px] mt-[26px] flex h-[100%] flex-col justify-between">
          <ul className="flex flex-col items-center gap-[10px]">
            <NavigationItem menu="chat" />
            <NavigationItem menu="poll" />
            <NavigationItem menu="information" />
          </ul>
          <ThemeSwitch />
        </nav>
      </aside>
      <main className="w-full" style={{ background: 'var(--background-radial-gradient)' }}>
        {children}
      </main>
    </div>
  );
}

const NavigationItem = ({ menu }: { menu: Menu }) => {
  const { isActiveMenu, handleChangeMenu } = useNavigation();

  return (
    <li
      className={clsx(
        'flex h-[36px] w-[36px] items-center justify-center rounded-[10px]',
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
      className="flex size-[36px] items-center justify-center rounded-[10px] bg-gray-200"
      onClick={() => setTheme(isLightMode ? 'dark' : 'light')}
    >
      <Icon name={isLightMode ? 'LightMode' : 'DarkMode'} className={isLightMode ? 'fill-gray-900' : 'fill-gray-500'} />
    </button>
  );
};
