import { formatRelativeTime } from '@/utils/date';
import Image from 'next/image';
import Link from 'next/link';
import { TBlockchainInformationData } from '../../type';
import BlockChainLabel from '../BlockchainLabel/BlockchainLabel';

const BlockchainNews = ({ news }: { news: TBlockchainInformationData }) => {
  const { url, imgUrl, network, datePublished, title } = news;

  return (
    <li className="group">
      <Link href={url} target="_blank">
        <div className="relative h-[15rem] w-full overflow-clip rounded-[1.2rem]">
          <Image
            src={imgUrl || '/images/no-result.webp'}
            alt="news card thumbnail"
            layout="fill"
            style={{ objectFit: 'cover' }}
            className="transition-all duration-300 group-hover:scale-110"
            priority
          />
        </div>

        <div className="flex items-center gap-x-[1rem] pt-[1.6rem]">
          <BlockChainLabel blockchainNetwork={network} />
          <span className="text-body-2-medium text-gray-700">{formatRelativeTime(datePublished)}</span>
        </div>
        <h3 className="group-hover:underline: line-clamp-2 pt-[0.4rem] text-title-3-semibold text-gray-900 group-hover:underline">
          {title}
        </h3>
      </Link>
    </li>
  );
};

export default BlockchainNews;
