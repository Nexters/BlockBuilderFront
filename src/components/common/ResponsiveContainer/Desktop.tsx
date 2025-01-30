import { Menu, useNavigation } from '@/hooks/useNavigation';
import clsx from 'clsx';
import { Icon, IconType } from '@/assets/icons';
import { capitalize } from '@/utils/string';
import { useTheme } from 'next-themes';
import { useMount } from '@/hooks/useMount';

export default function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-[260px] h-[100vh] px-[20px] pt-[20px] pb-[80px] flex flex-col justify-between">
        <div>
          <header className="flex items-center">
            <button className="w-[36px] h-[36px] bg-[#6390FA] rounded-[10px]"></button>
            <h1 className="ml-[12px] text-title-1-medium text-gray-800">for-the-block</h1>
          </header>

          <nav className="mt-[26px] mb-[36px]">
            <ul className="flex flex-col gap-[10px]">
              <NavigationItem menu="chat">블록챗</NavigationItem>
              <NavigationItem menu="news">소식</NavigationItem>
              <NavigationItem menu="poll">투표</NavigationItem>
            </ul>
          </nav>

          <h3 className="text-body-2-medium text-gray-600 p-[12px]">최근 검색어</h3>
          <ul className="flex flex-col gap-[4px]">
            {[
              '블록체인',
              '이더리움 백서 주요 내용은 무엇인가요?',
              '블록체인은 어떤 문제를 해결하려고 만들어졌어?',
              '새로운 블록체인 프로토콜의 특징은?',
              '이더리움 백서 주요 내용은 무엇인가요?',
            ].map((text, index) => (
              <li key={index} className="text-body-2-regular text-gray-900 py-[6px] px-[12px] truncate">
                {text}
              </li>
            ))}
          </ul>
        </div>

        <ThemeSwitch />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}

const NavigationItem = ({ menu, children }: { menu: Menu; children: React.ReactNode }) => {
  const { isActiveMenu, handleChangeMenu } = useNavigation();

  return (
    <li
      className={clsx(
        'w-[100%] h-[36px] px-[12px] rounded-[8px] flex items-center cursor-pointer',
        isActiveMenu(menu) && 'bg-gray-200'
      )}
      onClick={handleChangeMenu(menu)}
    >
      <Icon name={capitalize(menu) as IconType} className={isActiveMenu(menu) ? 'fill-gray-900' : 'fill-gray-500'} />
      <span className={clsx('text-body-1-medium ml-[8px]', isActiveMenu(menu) ? 'text-gray-900' : 'text-gray-500')}>
        {children}
      </span>
    </li>
  );
};

const ThemeSwitch = () => {
  const { theme, setTheme } = useTheme();
  const mounted = useMount();
  if (!mounted) {
    return null;
  }

  return (
    <div className=" w-[100%] flex p-[4px] bg-gray-200 rounded-full">
      <button
        onClick={() => setTheme('light')}
        className={clsx(
          'w-[100%] flex items-center justify-center px-[20px] py-[4px] gap-[6px] rounded-full',
          theme === 'light' ? 'bg-white' : ''
        )}
      >
        <Icon name={'LightMode'} className={theme === 'light' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={theme === 'light' ? 'text-gray-800' : 'text-gray-500'}>Light</span>
      </button>
      <button
        onClick={() => setTheme('dark')}
        className={clsx(
          'w-[100%] flex items-center justify-center px-[20px] py-[4px] gap-[6px] rounded-full',
          theme === 'dark' ? 'bg-dark' : ''
        )}
      >
        <Icon name={'DarkMode'} className={theme === 'dark' ? 'fill-gray-900' : 'fill-gray-500'} />
        <span className={theme === 'dark' ? 'text-gray-800' : 'text-gray-500'}>Dark</span>
      </button>
    </div>
  );
};
