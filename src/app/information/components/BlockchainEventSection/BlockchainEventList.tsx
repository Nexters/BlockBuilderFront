import { generate2DData } from '@/utils/array';
import { RefObject } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { TBlockchainInformationData } from '../../type';
import BlockchainEvent from './BlockchainEvent';

const BlockchainEventList = ({
  eventList,
  swiperRef,
}: {
  eventList: TBlockchainInformationData[];
  swiperRef: RefObject<SwiperRef | null>;
}) => {
  const chunkEventList = generate2DData({ data: eventList });

  return (
    <>
      <Swiper className="!hidden md:!block" slidesPerView={1} ref={swiperRef}>
        {chunkEventList.map((_, index) => {
          return (
            <SwiperSlide tag="ul" className="!grid !grid-cols-2 gap-[2rem]" key={index}>
              {chunkEventList[index].map((blockChainEvent) => {
                return (
                  <li key={`${blockChainEvent.id}-${blockChainEvent.sourceIndex}`}>
                    <BlockchainEvent blockChainEvent={blockChainEvent} />
                  </li>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ul className="grid grid-flow-col grid-rows-2 gap-[2rem] overflow-x-auto pl-[4rem] pr-[2rem] md:hidden mobile:pl-[2rem]">
        {eventList.map((blockChainEvent) => {
          return (
            <li key={`${blockChainEvent.id}-${blockChainEvent.sourceIndex}`}>
              <BlockchainEvent blockChainEvent={blockChainEvent} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BlockchainEventList;
