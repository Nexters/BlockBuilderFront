import { Swiper, SwiperClass, SwiperSlide } from 'swiper/react';
import { RecommendQuestion } from '../../data';
import Question from './Question';
import NavigationButton from './NavigationButton';
import { useEffect, useState } from 'react';
import 'swiper/css';
import clsx from 'clsx';

interface QuestionsProps {
  questions: RecommendQuestion[];
  handleClick: (text: string) => void;
}

const SMALL_BREAKPOINT = 824;

const Questions = ({ questions, handleClick }: QuestionsProps) => {
  const [swiper, setSwiper] = useState<SwiperClass | null>(null);
  const [isSmall, setIsSmall] = useState(window.matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`).matches);

  useEffect(() => {
    window.addEventListener('resize', () => {
      setIsSmall(window.matchMedia(`(max-width: ${SMALL_BREAKPOINT}px)`).matches);
    });
    return () => {
      window.removeEventListener('resize', () => {});
    };
  }, []);

  return (
    <div className="@container relative flex h-[15.1rem] w-full max-w-[76.4rem] items-center justify-center overflow-hidden tablet:max-w-[min(calc(100vw-60px),76.4rem)]">
      <div
        className={clsx(
          'pointer-events-none absolute top-0 z-10 flex size-full h-[13.1rem] max-w-[76.4rem] items-center justify-between px-[4rem]',
          isSmall &&
            'bg-[linear-gradient(90deg,#F9FAF8_7%,rgba(255,255,255,0)_27%,rgba(255,255,255,0)_73.5%,#F1F4FD_93%)]'
        )}
      >
        <NavigationButton direction="prev" swiper={swiper} isSmall={isSmall} />
        <NavigationButton direction="next" swiper={swiper} isSmall={isSmall} />
      </div>
      <div className="h-full w-[68.4rem]">
        <Swiper
          className="size-full"
          slidesPerView={3}
          spaceBetween={12}
          centeredSlides
          loop
          onSwiper={(e) => {
            setSwiper(e);
          }}
        >
          {questions.map((question) => (
            <SwiperSlide key={question.id} className="my-[1rem] h-[13.1rem]">
              {({ isActive, isPrev }) => (
                <Question
                  {...question}
                  isActive={isActive}
                  isPrev={isPrev}
                  onClick={() => handleClick(question.question)}
                />
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Questions;
