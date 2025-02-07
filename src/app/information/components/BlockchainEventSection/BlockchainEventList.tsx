import { formatDateTime } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import BlockChainLabel from '../BlockchainLabel/BlockchainLabel';

const BlockchainEventList = ({ eventList }: { eventList: any[] }) => {
  return (
    <div className="grid grid-flow-col grid-rows-2 gap-[2rem] overflow-x-auto md:grid-flow-dense md:grid-cols-2 md:whitespace-normal">
      {eventList.map((blockChainEvent) => {
        const { id, url, thumbnailUrl, title, submissionPeriodDates, datePublished, sourceIndex, network } =
          blockChainEvent;

        return (
          <div key={`${id}-${sourceIndex}`}>
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
                  <h3 className="line-clamp-1 text-title-3-semibold text-gray-900">{title}</h3>
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
