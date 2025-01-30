import { Icon } from '@/assets/icons';
import clsx from 'clsx';
import { useSwiper } from 'swiper/react';

const NavigationButton = ({ direction }: { direction: 'prev' | 'next' }) => {
  const swiper = useSwiper();
  return (
    <div
      className={clsx(
        'flex items-center z-10 bg-gray-100 w-[4.3rem] h-full absolute top-0',
        direction === 'prev' ? 'left-0' : 'right-0 justify-end'
      )}
    >
      <button
        className={clsx(
          'size-[2.8rem] bg-gray-200 rounded-full flex items-center justify-center',
          direction === 'prev' && 'rotate-180'
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
    </div>
  );
};

export default NavigationButton;
