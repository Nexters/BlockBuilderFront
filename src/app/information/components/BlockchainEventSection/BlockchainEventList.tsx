import { formatDateTime } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import BlockChainLabel from '../BlockchainLabel/BlockchainLabel';

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const BlockchainEventList = ({ eventList }: { eventList: any[] }) => {
  return (
    <div className="grid grid-cols-2 grid-rows-2 gap-[2rem] mobile:grid-cols-1">
      {eventList.map((blockChainEvent) => {
        const { id, url, thumbnailUrl, title, submissionPeriodDates, datePublished, sourceIndex, network } =
          blockChainEvent;

        return (
          <div key={`${id}-${sourceIndex}`}>
            <Link href={url} target="_blank">
              <div className="flex gap-x-[2rem]">
                <div className="relative h-[14.4rem] w-[12rem] overflow-clip rounded-[0.8rem] bg-background">
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
                  <p className="pb-[0.4rem] text-body-2-regular text-gray-700">
                    {submissionPeriodDates ?? formatDateTime(datePublished)}
                  </p>
                  <h3 className="line-clamp-2 text-title-3-semibold text-gray-900">{title}</h3>
                </div>
              </div>
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export default BlockchainEventList;
