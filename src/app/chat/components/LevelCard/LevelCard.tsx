import clsx from "clsx";
import { Level } from "../../data";
import Image from "next/image";

const LevelCard = ({
  level,
  isSelected,
  onClick,
  image,
}: {
  level: Level;
  isSelected: boolean;
  onClick: () => void;
  image: string;
}) => {
  return (
    <button
      className={clsx(
        "flex h-[6rem] w-[5.2rem] flex-col items-center justify-center gap-[0.2rem] rounded-md border",
        isSelected
          ? "border-blue-400 text-blue-500 shadow-normal"
          : "border-gray-300 text-gray-600",
      )}
      onClick={onClick}
    >
      <Image src={image} alt={level} width={28} height={28} />
      <span className="text-body-2-semibold">{level}</span>
    </button>
  );
};

export default LevelCard;
