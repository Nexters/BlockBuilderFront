import { ToastProvider } from '@/contexts/ToastContext';
import Image from 'next/image';
import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';
import Link from 'next/link';
import { Icon } from '@/assets/icons';
export default function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="flex h-[100vh] w-[260px] flex-col justify-between px-[20px] pb-[80px] pt-[20px]">
        <div>
          <header>
            <Link href="/" className="flex h-[36px] items-center gap-[1rem]">
              <Image src="/images/symbol.png" alt="logo" width={36} height={36} />
              <Icon name="Logo" className="text-gray-900" width={120} height={19} />
            </Link>
          </header>
          <Navigation />
          <RecentSearchKeyword />
        </div>
        <ThemeSwitch />
      </aside>
      <ToastProvider>
        <main
          className="relative max-h-[100vh] flex-1 overflow-y-auto"
          style={{ background: 'var(--background-radial-gradient)' }}
        >
          {children}
        </main>
      </ToastProvider>
    </div>
  );
}
