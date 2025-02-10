import { useRouter } from 'next/navigation';

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
      className="flex size-full flex-col items-center justify-center gap-[0.8rem] rounded-[1.2rem] bg-blue-100 px-[2rem] py-[1.2rem] disabled:cursor-not-allowed"
      disabled={!isAvailable}
      onClick={() => {
        if (!isAvailable) return;
        router.push(url);
      }}
    >
      <p className="text-title-2-semibold">{title}</p>
      <p className="text-body-1-regular">{description}</p>
    </button>
  );
};

export default Recommendation;
