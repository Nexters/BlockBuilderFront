import Link from 'next/link';

type CardProps = {
  title: string;
  description: string;
  url: string;
};

const Card = ({ title, description, url }: CardProps) => {
  return (
    <Link
      href={url}
      className="h-[20.4rem] w-full max-w-[68.4rem] rounded-[1.2rem] bg-blue-200 p-[2.4rem] mobile:h-[18rem]"
    >
      <div className="flex flex-col gap-[0.6rem]">
        <p className="text-title-2-semibold">{title}</p>
        <p className="text-body-2-regular text-gray-800">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
