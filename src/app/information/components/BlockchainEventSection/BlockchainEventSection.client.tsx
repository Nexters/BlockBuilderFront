'use client';

import { Icon } from '@/assets/icons';
import { useMemo, useRef, useState } from 'react';
import { SwiperRef } from 'swiper/react';
import { TBlockchainInformationData } from '../../type';
import BlockchainEventList from './BlockchainEventList';

const eventTabList = [
  { text: '해커톤', value: 'hackathon' },
  { text: '밋업', value: 'meetup' },
] as const;

export type TEventTab = (typeof eventTabList)[number]['value'] | undefined;

const BlockchainEventSectionClient = ({
  hackathonList,
  meetupList,
}: {
  hackathonList: TBlockchainInformationData[];
  meetupList: TBlockchainInformationData[];
}) => {
  const swiperRef = useRef<SwiperRef>(null);
  const [currentEventTabValue, setCurrentEventTabValue] = useState<TEventTab>(eventTabList.at(0)?.value ?? undefined);
  const [currentPage, setCurrentPage] = useState(1);

  const maxPage = useMemo(
    () => Math.floor((currentEventTabValue === 'hackathon' ? hackathonList.length : meetupList.length) / 4),
    [hackathonList, meetupList, currentEventTabValue]
  );

  const handleEventTabClick = (selectedEventTab: TEventTab) => {
    if (swiperRef && swiperRef?.current) {
      setCurrentEventTabValue(selectedEventTab);
      setCurrentPage(1);
      swiperRef.current.swiper.slideTo(0, 0);
    }
  };

  const handlePrevClick = () => {
    if (swiperRef && swiperRef?.current) {
      setCurrentPage((prev) => Math.max(prev - 1, 1));
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNextClick = () => {
    if (swiperRef && swiperRef?.current) {
      setCurrentPage((prev) => Math.min(prev + 1, maxPage));
      swiperRef.current.swiper.slideNext();
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between pb-[2.4rem]">
        <div className="flex items-center gap-x-[1.2rem]">
          {eventTabList.map((eventTab) => {
            return (
              <button
                key={eventTab.value}
                className={`cursor-pointer rounded-[0.8rem] px-[1.6rem] py-[0.5rem] ${
                  currentEventTabValue === eventTab.value
                    ? 'bg-gray-900 text-body-2-semibold text-gray-100'
                    : 'bg-background text-body-2-medium text-gray-700'
                }`}
                onClick={() => handleEventTabClick(eventTab.value)}
              >
                {eventTab.text}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-x-[2rem] opacity-0 md:opacity-100">
          <button
            className="flex h-[2.8rem] w-[2.8rem] rotate-180 cursor-pointer items-center justify-center rounded-full bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled={currentPage === 1}
            onClick={handlePrevClick}
          >
            <Icon name="ArrowRight" />
          </button>
          <button
            className="flex h-[2.8rem] w-[2.8rem] cursor-pointer items-center justify-center rounded-full bg-gray-200 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled={currentPage === maxPage}
            onClick={handleNextClick}
          >
            <Icon name="ArrowRight" />
          </button>
        </div>
      </div>

      <div>
        <BlockchainEventList
          eventList={currentEventTabValue === 'hackathon' ? hackathonList : meetupList}
          swiperRef={swiperRef}
        />
      </div>
    </div>
  );
};

export default BlockchainEventSectionClient;
