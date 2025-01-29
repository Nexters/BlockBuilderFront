import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { questions } from "../../data";
import Question from "./Question";
import "swiper/css";
import "swiper/css/navigation";

const Questions = () => {
  return (
    <>
      <Swiper
        className="h-[14.1rem] w-[84rem]"
        modules={[Navigation]}
        slidesPerView={3}
        centeredSlides={true}
        navigation={true}
        spaceBetween={12}
        loop
      >
        {questions.map((question) => (
          <SwiperSlide key={question.id}>
            {({ isActive, isPrev }) => (
              <Question {...question} isActive={isActive} isPrev={isPrev} />
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Questions;
