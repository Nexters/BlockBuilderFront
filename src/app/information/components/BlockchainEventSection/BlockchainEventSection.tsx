"use client";

import { useState } from "react";
import { hackathonList, meetupList } from "../../const";
import BlockchainEventList from "./BlockchainEventList";

const eventTabList = [
  { text: "해커톤", value: "hackathon" },
  { text: "밋업", value: "meetup" },
] as const;

export type TEventTab = (typeof eventTabList)[number]["value"] | undefined;

const BlockchainEventSection = () => {
  const [currentEventTabValue, setCurrentEventTabValue] = useState<TEventTab>(
    eventTabList.at(0)?.value ?? undefined,
  );

  const [currentPage, setCurrentPage] = useState(1);
  const maxPage = 5;

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
                    ? "bg-gray-900 text-body-2-semibold text-gray-100"
                    : "bg-background text-body-2-medium text-gray-700"
                }`}
                onClick={() => setCurrentEventTabValue(eventTab.value)}
              >
                {eventTab.text}
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-x-[2rem] mobile:hidden">
          <button
            className="h-[2.8rem] w-[2.8rem] cursor-pointer rounded-full bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled={currentPage === 1}
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          >{`<`}</button>
          <button
            className="h-[2.8rem] w-[2.8rem] cursor-pointer rounded-full bg-gray-100 disabled:cursor-not-allowed disabled:text-gray-400"
            disabled={currentPage === maxPage}
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, maxPage))
            }
          >{`>`}</button>
        </div>
      </div>

      <BlockchainEventList
        eventList={
          currentEventTabValue === "hackathon" ? hackathonList : meetupList
        }
      />
    </div>
  );
};

export default BlockchainEventSection;
