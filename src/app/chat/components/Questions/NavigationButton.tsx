import { Icon } from '@/assets/icons';
import clsx from 'clsx';
import { useSwiper } from 'swiper/react';

const NavigationButton = ({ direction }: { direction: 'prev' | 'next' }) => {
  const swiper = useSwiper();
  return (
    <div
      className={clsx(
        'absolute top-0 z-10 flex h-full w-[3.4rem] items-center',
        direction === 'prev' ? 'left-0' : 'right-0 justify-end'
      )}
    >
      <button
        className={clsx('flex size-[3rem] items-center justify-center', direction === 'prev' && 'rotate-180')}
        onClick={() => {
          if (direction === 'prev') {
            swiper.slidePrev();
          } else {
            swiper.slideNext();
          }
        }}
      >
        <Icon name="ArrowRight" className="text-gray-900" />
      </button>
    </div>
  );
};

export default NavigationButton;
