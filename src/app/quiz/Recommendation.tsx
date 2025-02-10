import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Recommendation = ({
  isAvailable,
  title,
  description,
  url,
}: {
  isAvailable: boolean;
  title: string;
  description: string;
  url: string;
}) => {
  const router = useRouter();

  return (
    <button
      className="relative flex size-full flex-col items-center justify-between gap-[0.8rem] rounded-[1.2rem] bg-blue-100 px-[2.4rem] py-[3.2rem] disabled:cursor-not-allowed mobile:flex-row mobile:py-[1.2rem]"
      disabled={!isAvailable}
      onClick={() => {
        if (!isAvailable) return;
        router.push(url);
      }}
    >
      <div className="z-10 flex flex-col items-center gap-[0.4rem] mobile:items-start">
        <p className="text-title-2-semibold">{title}</p>
        <p className="break-keep text-body-1-regular mobile:text-start">{description}</p>
      </div>
      <div className="absolute size-[20rem] mobile:right-0 mobile:size-[12rem] tablet:bottom-0 desktop:bottom-0">
        <Image src="/images/chat/block.gif" alt="block" fill />
      </div>
    </button>
  );
};

export default Recommendation;
