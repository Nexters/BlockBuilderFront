import { generate2DData } from '@/utils/array';
import { RefObject } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import useInformationPageActions from '../../hooks/useInformationPageActions';
import { TBlockchainInformationData, TBlockchainInformationType } from '../../type';
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
  const { handleInformationClick } = useInformationPageActions();
  const blockchainEventListChunk = generate2DData({ data: blockchainEventList });

  return (
    <>
      <Swiper className="!hidden md:!block" slidesPerView={1} ref={swiperRef}>
        {blockchainEventListChunk.map((_, index) => {
          return (
            <SwiperSlide tag="ul" className="!grid !grid-cols-2 gap-[2rem]" key={index}>
              {blockchainEventListChunk[index]?.map((blockchainEvent) => {
                return (
                  <li
                    key={`${blockchainEvent.id}-${blockchainEvent.sourceIndex}`}
                    onClick={() => handleInformationClick(blockchainEvent, blockchainEventType)}
                  >
                    <BlockchainEvent blockchainEvent={blockchainEvent} />
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
        {blockchainEventList?.map((blockchainEvent) => {
          return (
            <li
              key={`${blockchainEvent.id}-${blockchainEvent.sourceIndex}`}
              onClick={() => handleInformationClick(blockchainEvent, blockchainEventType)}
            >
              <BlockchainEvent blockchainEventType={blockchainEventType} blockchainEvent={blockchainEvent} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default BlockchainEventList;
