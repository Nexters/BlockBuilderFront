'use client';

import Image from 'next/image';
import Link from 'next/link';
import useCoin from './useCoin';
import { downloadImage } from '@/utils/download-image';
import { useToast } from '@/contexts/ToastContext';
import clsx from 'clsx';
const CoinPage = () => {
  const { coin } = useCoin();
  const { showToast } = useToast();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[4rem] p-[4rem] pb-[6.2rem] mobile:h-[calc(100vh-5.6rem)]">
      {!coin && (
        <>
          <div className="flex flex-col items-center gap-[0.8rem]">
            <h1 className="text-title-1-semibold">나만의 NFT를 만들어보세요</h1>
            <p className="text-body-2-regular text-gray-700">
              블록체인 기술을 활용하여 손쉽게 NFT를 만들어보세요. 쉽고 빠르게 소유권을 증명할 수 있는 NFT를 만들어
              보세요.
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem]">
            <Image src="/images/chat/block.gif" alt="loading" width={200} height={200} />
            <p className="text-body-2-semibold">NFT를 생성중이에요.</p>
          </div>
        </>
      )}
      {coin && (
        <div className="scrollbar-hide flex max-w-[68.4rem] flex-col items-center justify-between overflow-auto mobile:pb-[10rem] tablet:h-[80vh] desktop:h-[80vh]">
          <div className="flex flex-col items-center gap-[4rem] mobile:gap-[3rem]">
            <div className="flex flex-col items-center">
              <p className="text-center text-headline-2-bold">{coin.name}</p>
            </div>
            <div className="flex gap-[3rem]">
              <div className="flex flex-col items-center gap-[2rem]">
                <div className="overflow-hidden rounded-[0.8rem]">
                  <Image src={coin.image} alt="coin" width={200} height={200} />
                </div>
                <button
                  onClick={() =>
                    downloadImage(
                      coin.image,
                      `${coin.name}.png`,
                      () => {},
                      () => showToast('이미지 저장에 실패했어요')
                    )
                  }
                  className="bg-system-light flex items-center rounded-full border border-blue-100 px-[1.6rem] py-[0.6rem] text-body-2-semibold hover:shadow-normal"
                >
                  이미지 저장
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-[2rem] mobile:hidden">
                <div className="flex flex-col gap-[0.8rem]">
                  <p className="text-body-2-medium text-gray-600">수량</p>
                  <p className="text-body-1-regular">{coin.amount}</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'text-system-light flex text-body-1-semibold',
              'mobile:bg-system-light mobile:absolute mobile:bottom-0 mobile:w-full mobile:p-[0.8rem_2rem_3.2rem]'
            )}
          >
            <Link
              href={coin.receipt_link}
              className="flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 mobile:w-full"
              target="_blank"
            >
              코인 영수증 확인하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoinPage;
