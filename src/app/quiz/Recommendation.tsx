import { useRouter } from 'next/navigation';
import Image from 'next/image';

const Recommendation = ({ title, description, url }: { title: string; description: string; url: string }) => {
  const router = useRouter();

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
      </div>
      <Image src="/images/landing/graphic-recommend.png" alt="recommend" fill className="object-cover" />
    </button>
  );
};

export default Recommendation;
