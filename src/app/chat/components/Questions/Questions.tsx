import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { RecommendQuestion } from '../../data';
import Question from './Question';
import NavigationButton from './NavigationButton';
import 'swiper/css';

interface QuestionsProps {
  questions: RecommendQuestion[];
  handleClick: (text: string) => void;
}

const Questions = ({ questions, handleClick }: QuestionsProps) => {
  return (
    <>
      <Swiper
        className="h-[14.1rem] w-[84rem]"
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides
        navigation
        spaceBetween={12}
        loop
      >
        <NavigationButton direction="prev" />
        <NavigationButton direction="next" />
        {questions.map((question) => (
          <SwiperSlide key={question.id}>
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
    </>
  );
};

export default Questions;
