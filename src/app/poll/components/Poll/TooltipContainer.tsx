import Tooltip from '@/assets/icons/Tooltip';
import { useState } from 'react';

export default function TooltipContainer() {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleTooltip = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <button
      onMouseEnter={handleToggleTooltip}
      onMouseLeave={handleToggleTooltip}
      onClick={handleToggleTooltip}
      className="relative"
    >
      <Tooltip />
      {isOpen && (
        <div className="absolute top-0 w-[23rem] translate-y-[3.6rem] rounded-[0.8rem] bg-background px-[2rem] py-[1.8rem] shadow-normal mobile:right-0 mobile:origin-top-right tablet:left-0 tablet:origin-top-left desktop:left-0 desktop:origin-top-left">
          <p className="text-left text-body-2-semibold text-gray-800">블록체인 투표, 왜 특별할까요?</p>
          <p className="mt-[1rem] text-left text-body-3-medium text-gray-700">
            여러분의 선택은 블록체인에 영구적으로 보관되며, 수정하거나 삭제할 수 없어요. <br /> 블록체인은 투표로
            운영되어, 모든 표가 탈중앙화 생태계에 기여하고 있죠. <br />
            <br />
            투표 후, 영수증 링크에서 직접 기록을 조회할 수 있어요. <br />
            투표에 참여하며 블록체인을 직접 경험해보세요!
          </p>
        </div>
      )}
    </button>
  );
}
