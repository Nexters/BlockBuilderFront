import { Icon, IconType } from '@/assets/icons';
import { Menu, useNavigation } from '@/hooks/useNavigation';
import { capitalize } from '@/utils/string';
import clsx from 'clsx';

export const Navigation = () => {
  return (
    <nav className="mb-[3.6rem] mt-[2.6rem]">
      <ul className="flex flex-col gap-[1rem]">
        <NavigationItem menu="landing">시작하기</NavigationItem>
        <NavigationItem menu="chat">블록챗</NavigationItem>
        <NavigationItem menu="poll">투표</NavigationItem>
        <NavigationItem menu="information">소식</NavigationItem>
      </ul>
    </nav>
  );
};

const NavigationItem = ({ menu, children }: { menu: Menu; children: React.ReactNode }) => {
  const { isActiveMenu, handleChangeMenu } = useNavigation();

  return (
    <li
      className={clsx(
        'flex h-[3.6rem] w-full cursor-pointer items-center rounded-[0.8rem] px-[1.2rem]',
        isActiveMenu(menu) && 'bg-gray-200'
      )}
      onClick={handleChangeMenu(menu)}
    >
      <Icon name={capitalize(menu) as IconType} className={isActiveMenu(menu) ? 'fill-gray-900' : 'fill-gray-500'} />
      <span className={clsx('ml-[0.8rem] text-body-1-medium', isActiveMenu(menu) ? 'text-gray-900' : 'text-gray-500')}>
        {children}
      </span>
    </li>
  );
};
