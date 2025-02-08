import { formatDateTime } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import { RefObject } from 'react';
import 'swiper/css';
import { Swiper, SwiperRef, SwiperSlide } from 'swiper/react';
import BlockChainLabel from '../BlockchainLabel/BlockchainLabel';

const generate2DArray = ({ array, size = 4 }: { array: any[]; size?: number }) => {
  const result = [];

  for (let i = 0; i < array.length; i += size) {
    result.push(array.slice(i, i + size));
  }

  return result;
};
const BlockchainEventList = ({
  eventList,
  swiperRef,
}: {
  eventList: any[];
  swiperRef: RefObject<SwiperRef | null>;
}) => {
  const chunkEventList = generate2DArray({ array: eventList });

  return (
    <>
      <Swiper className="!hidden md:!block" slidesPerView={1} ref={swiperRef}>
        {chunkEventList.map((_, index) => {
          return (
            <SwiperSlide tag="ul" className="!grid !grid-cols-2 gap-[2rem]" key={index}>
              {chunkEventList[index].map((blockChainEvent) => {
                return (
                  <div key={`${blockChainEvent.id}-${blockChainEvent.sourceIndex}`}>
                    <BlockchainEvent blockChainEvent={blockChainEvent} />
                  </div>
                );
              })}
            </SwiperSlide>
          );
        })}
      </Swiper>

      <div className="grid grid-flow-col grid-rows-2 gap-[2rem] overflow-x-auto md:hidden">
        {eventList.map((blockChainEvent) => {
          return (
            <div key={`${blockChainEvent.id}-${blockChainEvent.sourceIndex}`}>
              <BlockchainEvent blockChainEvent={blockChainEvent} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default BlockchainEventList;

const BlockchainEvent = ({ blockChainEvent }: { blockChainEvent: any }) => {
  const { url, thumbnailUrl, title, submissionPeriodDates, datePublished, network } = blockChainEvent;

  return (
    <Link href={url} target="_blank">
      <div className="flex gap-x-[2rem]">
        <div className="relative min-h-[14.4rem] min-w-[12rem] overflow-clip rounded-[0.8rem] bg-background">
          <Image
            src={thumbnailUrl}
            alt="event card thumbnail"
            layout="fill"
            style={{
              objectFit: 'cover',
            }}
          />
        </div>

        <div className="flex-1">
          <BlockChainLabel className="mb-[1rem]" blockchainNetwork={network} />
          <p className="text-nowrap pb-[0.4rem] text-body-2-regular text-gray-700">
            {submissionPeriodDates ?? formatDateTime(datePublished)}
          </p>
          <h3 className="line-clamp-2 text-title-3-semibold text-gray-900">{title}</h3>
        </div>
      </div>
    </Link>
  );
};
