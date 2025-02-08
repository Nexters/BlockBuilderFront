import { Icon, IconType } from '@/assets/icons';
import { Menu, useNavigation } from '@/hooks/useNavigation';
import { capitalize } from '@/utils/string';
import clsx from 'clsx';

export const Navigation = () => {
  return (
    <nav className="mt-[2.6rem] mb-[3.6rem]">
      <ul className="flex flex-col gap-[1rem]">
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
        'w-full h-[3.6rem] px-[1.2rem] rounded-[0.8rem] flex items-center cursor-pointer',
        isActiveMenu(menu) && 'bg-gray-200'
      )}
      onClick={handleChangeMenu(menu)}
    >
      <Icon name={capitalize(menu) as IconType} className={isActiveMenu(menu) ? 'fill-gray-900' : 'fill-gray-500'} />
      <span className={clsx('text-body-1-medium ml-[0.8rem]', isActiveMenu(menu) ? 'text-gray-900' : 'text-gray-500')}>
        {children}
      </span>
    </li>
  );
};
