import { Icon } from '@/assets/icons';
import clsx from 'clsx';
import { useSwiper } from 'swiper/react';

const NavigationButton = ({ direction }: { direction: 'prev' | 'next' }) => {
  const swiper = useSwiper();
  return (
    <button
      className={clsx(
        'z-10 size-[2.8rem] bg-gray-200 rounded-full absolute top-1/2 -translate-y-1/2',
        direction === 'prev' ? 'left-0 rotate-180' : 'right-0'
      )}
      onClick={() => {
        if (direction === 'prev') {
          swiper.slidePrev();
        } else {
          swiper.slideNext();
        }
      }}
    >
      <Icon name="ArrowRight" className="text-gray-500" />
    </button>
  );
};

export default NavigationButton;
