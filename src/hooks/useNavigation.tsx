'use client';

import { usePathname, useRouter } from 'next/navigation';

export type Menu = 'landing' | 'chat' | 'poll' | 'information';

export const useNavigation = () => {
  const pathname = usePathname();
  const activeMenu = pathname?.split('/')[1] || 'landing';

  const isActiveMenu = (menu: Menu) => {
    if (['nft', 'coin', 'quiz'].includes(activeMenu) && menu === 'landing') {
      return true;
    }
    return activeMenu === menu;
  };

  const router = useRouter();
  const handleChangeMenu = (menu: Menu) => () => {
    router.push(menu === 'landing' ? '/' : `/${menu}`);
  };

  return { isActiveMenu, handleChangeMenu };
};
