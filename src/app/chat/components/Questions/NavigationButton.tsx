import { Icon } from '@/assets/icons';
import clsx from 'clsx';
import { SwiperClass } from 'swiper/react';

const NavigationButton = ({
  direction,
  swiper,
  isSmall,
}: {
  direction: 'prev' | 'next';
  swiper: SwiperClass | null;
  isSmall: boolean;
}) => {
  return (
    <div
      className={clsx(
        'flex w-[3rem] items-center justify-center',
        direction === 'prev' ? 'left-0' : 'right-0 justify-end'
      )}
    >
      <button
        className={clsx(
          'pointer-events-auto flex size-[2.8rem] items-center justify-center',
          isSmall && 'bg-system-light rounded-full border border-blue-100',
          direction === 'prev' && 'rotate-180'
        )}
        onClick={() => {
          if (direction === 'prev') {
            swiper?.slidePrev();
          } else {
            swiper?.slideNext();
          }
        }}
      >
        <Icon name="ArrowRight" className="text-gray-900" />
      </button>
    </div>
  );
};

export default NavigationButton;
