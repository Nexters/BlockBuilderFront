import { Icons } from '@/assets/icons';
import clsx from 'clsx';
import { useState } from 'react';
import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';

export default function Mobile({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <header className="w-full h-[56px] pl-[20px] pr-[20px] flex items-center">
        <button onClick={handleToggleDrawer}>
          <Icons.Menu className="fill-gray-900" />
        </button>
        <button className="w-[36px] h-[36px] ml-[20px] bg-[#6390FA] rounded-[10px]"></button>
      </header>

      {isDrawerOpen && <div className="fixed inset-0 bg-black bg-opacity-50 z-40" onClick={handleToggleDrawer} />}
      <aside
        className={clsx(
          'fixed top-0 left-0 w-[260px] h-[100vh] bg-white z-50 transition-transform duration-300 ease-in-out',
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="h-full px-[20px] pt-[20px] pb-[80px] flex flex-col justify-between">
          <div>
            <header className="flex items-center">
              <Icons.Menu className="fill-gray-900 mr-[2rem]" onClick={handleToggleDrawer} />
              <button className="w-[36px] h-[36px] bg-[#6390FA] rounded-[10px]"></button>
              <h1 className="ml-[12px] text-title-2-medium text-gray-800">for-the-block</h1>
            </header>
            <Navigation />
            <RecentSearchKeyword />
          </div>
          <ThemeSwitch />
        </div>
      </aside>
      <main className="w-full">{children}</main>
    </>
  );
}
