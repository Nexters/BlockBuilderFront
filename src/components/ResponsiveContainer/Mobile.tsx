import { Icons } from '@/assets/icons';
import clsx from 'clsx';
import { useState } from 'react';
import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';
import { ToastProvider } from '@/contexts/ToastContext';
import Link from 'next/link';
import Image from 'next/image';

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
        <Link href="/" className="ml-[20px] flex size-[36px] items-center gap-[1rem]">
          <Image src="/images/symbol.png" alt="logo" width={36} height={36} />
        </Link>
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
              <Link href="/" className="flex h-[36px] items-center gap-[1rem]">
                <Image src="/images/symbol.png" alt="logo" width={36} height={36} />
                <Image src="/images/logo.png" alt="logo" width={120} height={19} />
              </Link>
            </header>
            <Navigation />
            <RecentSearchKeyword />
          </div>
          <ThemeSwitch />
        </div>
      </aside>
      <ToastProvider>
        <main className="relative w-full" style={{ background: 'var(--background-radial-gradient)' }}>
          {children}
        </main>
      </ToastProvider>
    </>
  );
}
