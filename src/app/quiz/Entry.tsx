import Image from 'next/image';

const Entry = ({ onStart }: { onStart: () => void }) => {
  return (
    <div className="flex size-full flex-col items-center justify-between gap-[3rem]">
      <div className="flex flex-col items-center justify-center gap-[3rem]">
        <h1 className="whitespace-pre-wrap text-center text-title-1-semibold">{`도전!\n블록체인 퀴즈`}</h1>
        <h2 className="whitespace-pre-wrap text-center text-body-1-medium">{`퀴즈를 풀면서 간단한 블록체인 지식을 쌓고\n실력을 측정해 보아요!`}</h2>
      </div>
      <Image src="/images/chat/block.gif" alt="block" width={200} height={200} />
      <button
        className="h-[5.4rem] w-full rounded-[1.2rem] bg-blue-500 px-[1.5rem] py-[0.8rem] text-title-2-semibold text-white"
        onClick={onStart}
      >
        퀴즈 시작하기
      </button>
    </div>
  );
};

export default Entry;
