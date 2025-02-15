import { Icons } from '@/assets/icons';
import clsx from 'clsx';
import { useState } from 'react';
import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';
import { ToastProvider } from '@/contexts/ToastContext';

export default function Mobile({ children }: { children: React.ReactNode }) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const handleToggleDrawer = () => {
    setIsDrawerOpen((prev) => !prev);
  };

  return (
    <>
      <header className="flex h-[56px] w-full items-center pl-[20px] pr-[20px]">
        <button onClick={handleToggleDrawer}>
          <Icons.Menu className="fill-gray-900" />
        </button>
        <button className="ml-[20px] h-[36px] w-[36px] rounded-[10px] bg-[#6390FA]"></button>
      </header>

      {isDrawerOpen && <div className="fixed inset-0 z-40 bg-black bg-opacity-50" onClick={handleToggleDrawer} />}
      <aside
        className={clsx(
          'fixed left-0 top-0 z-50 h-[100vh] w-[260px] bg-background transition-transform duration-300 ease-in-out',
          isDrawerOpen ? 'translate-x-0' : '-translate-x-full'
        )}
      >
        <div className="flex h-full flex-col justify-between px-[20px] pb-[80px] pt-[20px]">
          <div>
            <header className="flex items-center">
              <Icons.Menu className="mr-[2rem] fill-gray-900" onClick={handleToggleDrawer} />
              <button className="h-[36px] w-[36px] rounded-[10px] bg-[#6390FA]"></button>
              <h1 className="ml-[12px] text-title-2-medium text-gray-800">for-the-block</h1>
            </header>
            <Navigation />
            <RecentSearchKeyword />
          </div>
          <ThemeSwitch />
        </div>
      </aside>
      <ToastProvider>
        <main className="bg-gradient-light dark:bg-gradient-dark relative w-full">{children}</main>
      </ToastProvider>
    </>
  );
}
