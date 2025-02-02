import { Navigation } from './common/Navigation';
import RecentSearchKeyword from './common/RecentSearchKeyword';
import ThemeSwitch from './common/ThemeSwitch';

export default function Desktop({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex">
      <aside className="w-[260px] h-[100vh] px-[20px] pt-[20px] pb-[80px] flex flex-col justify-between">
        <div>
          <header className="flex items-center">
            <button className="w-[36px] h-[36px] bg-[#6390FA] rounded-[10px]"></button>
            <h1 className="ml-[12px] text-title-1-medium text-gray-800">for-the-block</h1>
          </header>
          <Navigation />
          <RecentSearchKeyword />
        </div>
        <ThemeSwitch />
      </aside>
      <main className="flex-1">{children}</main>
    </div>
  );
}
