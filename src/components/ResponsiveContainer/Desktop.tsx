import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';

export default function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="flex h-[100vh] w-[260px] flex-col justify-between px-[20px] pb-[80px] pt-[20px]">
        <div>
          <header className="flex items-center">
            <button className="h-[36px] w-[36px] rounded-[10px] bg-[#6390FA]"></button>
            <h1 className="ml-[12px] text-title-1-medium text-gray-800">for-the-block</h1>
          </header>
          <Navigation />
          <RecentSearchKeyword />
        </div>
        <ThemeSwitch />
      </aside>
      <main
        className="max-h-[100vh] flex-1 overflow-y-auto"
        style={{ background: 'var(--background-radial-gradient)' }}
      >
        {children}
      </main>
    </div>
  );
}
