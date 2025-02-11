import Image from 'next/image';
import { TBlockchainNetworkCode } from '../../type';
import { blockchainNetworkLabelMap } from './const';

const BlockChainLabel = ({
  className = '',
  blockchainNetwork,
}: {
  className?: string;
  blockchainNetwork: TBlockchainNetworkCode;
}) => {
  const { text, value } = blockchainNetworkLabelMap[blockchainNetwork];

  return (
    <div
      className={`flex !w-fit items-center gap-[0.4rem] rounded-full border-[0.05rem] border-solid border-gray-400 py-[0.2rem] pl-[0.2rem] pr-[0.8rem] ${className}`}
    >
      <Image src={`/images/blockchainSymbol/${value}.webp`} alt={`${value} symbol`} width={16} height={16} priority />
      <span className="text-caption-1-semibold text-gray-700">{text}</span>
    </div>
  );
};

export default BlockChainLabel;
