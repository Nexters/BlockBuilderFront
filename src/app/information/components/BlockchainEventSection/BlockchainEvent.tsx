import { Icon } from '@/assets/icons';
import Image from 'next/image';
import Link from 'next/link';
import { TBlockchainInformationData } from '../../type';
import BlockChainLabel from '../BlockchainLabel/BlockchainLabel';

const BlockchainEvent = ({ blockChainEvent }: { blockChainEvent: TBlockchainInformationData }) => {
  const { url, imgUrl, title, startDate, endDate, network, host, prize } = blockChainEvent;

  return (
    <Link href={url} target="_blank">
      <div className="group flex gap-x-[2rem]">
        <div className="relative min-h-[14.4rem] min-w-[12rem] overflow-clip rounded-[0.8rem] bg-background">
          <Image
            src={imgUrl || '/images/no-result.webp'}
            alt="event card thumbnail"
            layout="fill"
            style={{
              objectFit: 'cover',
            }}
            className="transition-all duration-300 group-hover:scale-110"
            priority
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <BlockChainLabel className="mb-[0.8rem]" blockchainNetwork={network} />
            <p className="text-nowrap pb-[0.2rem] text-body-2-regular text-gray-700">
              {startDate} ~ {endDate}
            </p>
            <h3 className="line-clamp-1 text-title-3-semibold text-gray-900 group-hover:underline">{title}</h3>
          </div>

          <div className="flex flex-col gap-y-[0.2rem]">
            {host && (
              <div className="flex items-center text-body-2-medium text-gray-600">
                <Icon className="mr-[0.2rem]" name="Meetup" size={18} />
                <p className="mr-[0.4rem]">주최</p>
                <p className="line-clamp-1">{host}</p>
              </div>
            )}
            {prize && (
              <div className="flex items-center text-body-2-medium text-gray-600">
                <Icon className="mr-[0.2rem]" name="Bag" size={18} />
                <p className="mr-[0.4rem]">상금</p>
                <p>{prize}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BlockchainEvent;
