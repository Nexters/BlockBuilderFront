'use client';

import Image from 'next/image';
import Link from 'next/link';
import useCoin from './useCoin';

const CoinPage = () => {
  const { coin } = useCoin();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[4rem] p-[4rem]">
      <div className="flex flex-col items-center gap-[0.8rem]">
        <h1 className="text-title-1-semibold">나만의 코인을 만들어보세요</h1>
        <p className="text-body-2-regular text-gray-700">코인을 만들어보세요.</p>
        {coin && (
          <div className="flex flex-col items-center gap-[1.2rem]">
            <Image src="/images/chat/block.gif" alt="loading" width={200} height={200} />
            <p className="text-body-2-semibold">코인을 생성중이에요.</p>
          </div>
        )}
        {coin && (
          <div className="flex flex-col gap-[1.2rem] text-body-2-regular">
            <Image src={coin.image} alt="coin" width={100} height={100} />
            <p className="text-title-2-semibold">
              {coin.name} ({coin.symbol})
            </p>
            <p>{coin.amount}</p>
            <Link href={coin.receipt_link} target="_blank">
              영수증 보기
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoinPage;
