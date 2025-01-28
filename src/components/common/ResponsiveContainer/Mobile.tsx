import { Icons } from '@/assets/icons';

export default function Mobile({ children }: { children: React.ReactNode }) {
  return (
    <>
      <header className="w-full h-[56px] pl-[20px] pr-[20px] flex items-center">
        <button
          onClick={() => {
            // TODO: Drawer 열기
            console.log('menu clicked');
          }}
        >
          <Icons.Menu />
        </button>
        <button className="w-[36px] h-[36px] ml-[20px] bg-[#6390FA] rounded-[10px]"></button>
      </header>
      <main className="w-full">{children}</main>
    </>
  );
}
