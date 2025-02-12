import Image from 'next/image';
import Link from 'next/link';

export default function NotFound() {
  return (
    <main className="min-h-screen mobile:min-h-[calc(100vh-5.6rem)]">
      <div className="flex flex-col items-center justify-center pt-[21.8rem] mobile:pt-[10rem]">
        <Image alt="error image" src={'/images/block.webp'} width={260} height={250} priority />
        <p className="pb-[0.8rem] text-title-1-semibold">앗! 길을 잃으셨나요?</p>
        <p className="pb-[2rem] text-body-2-regular text-gray-700">
          원하시는 페이지를 찾을 수 없어요. 대신 홈으로 돌아가 볼까요?
        </p>

        <Link
          href="/"
          replace
          className="rounded-full bg-blue-400 px-[1.6rem] py-[0.6rem] text-body-2-semibold text-white"
        >
          홈으로 가기
        </Link>
      </div>
    </main>
  );
}
