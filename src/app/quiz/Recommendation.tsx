import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { useMemo } from 'react';
import { userStorage } from '@/hooks/useUser';

const Recommendation = ({
  type,
  title,
  description,
  url,
}: {
  type: 'coin' | 'nft' | 'chat' | 'poll' | 'information';
  title: string;
  description: string;
  url: string;
}) => {
  const router = useRouter();
  const result = useMemo(() => {
    if (type === 'coin' || type === 'nft') {
      return userStorage.getData(type);
    }
    return null;
  }, [type]);

  return (
    <button
      className="relative flex size-full h-[27.2rem] overflow-hidden rounded-[1.2rem] bg-blue-100 p-[2rem] mobile:h-[18rem] mobile:flex-row"
      onClick={() => {
        router.push(url);
      }}
    >
      <div className="z-10 flex flex-col gap-[0.6rem]">
        <p className="text-start text-title-2-semibold">{title}</p>
        <p className="break-keep text-start text-body-2-regular text-gray-800">{description}</p>
        {(type === 'coin' || type === 'nft') && (
          <p className="text-start text-body-2-medium text-blue-400">{result ? 1 : 0}/1</p>
        )}
      </div>
      <Image src="/images/landing/graphic-recommend.png" alt="recommend" fill className="object-cover" />
    </button>
  );
};

export default Recommendation;
