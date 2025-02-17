import { generate2DData } from '@/utils/array';
import { RefObject } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import { TBlockchainInformationType } from '../../api/fetchBlockchainInformation';
import { TBlockchainInformationData } from '../../type';
import BlockchainEvent from './BlockchainEvent';

const BlockchainEventList = ({
  blockchainEventList,
  blockchainEventType,
  swiperRef,
  scrollRef,
}: {
  blockchainEventList: TBlockchainInformationData[];
  blockchainEventType: TBlockchainInformationType;
  swiperRef: RefObject<SwiperRef | null>;
  scrollRef: RefObject<HTMLUListElement | null>;
}) => {
  const blockchainEventListChunk = generate2DData({ data: blockchainEventList });

  return (
    <>
      <Swiper className="!hidden md:!block" slidesPerView={1} ref={swiperRef}>
        {blockchainEventListChunk.map((_, index) => {
          return (
            <SwiperSlide tag="ul" className="!grid !grid-cols-2 gap-[2rem]" key={index}>
              {blockchainEventListChunk[index].map((blockChainEvent) => {
                return (
                  <li key={`${blockChainEvent.id}-${blockChainEvent.sourceIndex}`}>
                    <BlockchainEvent blockchainEvent={blockChainEvent} />
                  </li>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <ul
        ref={scrollRef}
        className="grid grid-flow-col grid-rows-2 gap-[2rem] overflow-x-auto pl-[4rem] pr-[2rem] scrollbar-hide md:hidden mobile:pl-[2rem]"
      >
        {blockchainEventList.map((blockchainEvent) => {
          return (
            <li key={`${blockchainEvent.id}-${blockchainEvent.sourceIndex}`}>
              <BlockchainEvent blockchainEventType={blockchainEventType} blockchainEvent={blockchainEvent} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BlockchainEventList;
