'use client';

import { useToast } from '@/contexts/ToastContext';
import { downloadImage } from '@/utils/download-image';
import clsx from 'clsx';
import Image from 'next/image';
import Link from 'next/link';
import useCoinPageActions from '../hooks/useCoinPageActions';
import useCoin from '../useCoin';

const CoinPage = () => {
  const { coin, isLoading: isCoinLoading } = useCoin();
  const { showToast } = useToast();
  const { handleSaveImageClick, handleOpenReceiptClick } = useCoinPageActions();

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[4rem] p-[4rem] pb-[6.2rem] mobile:h-[calc(100vh-5.6rem)] mobile:p-[1.6rem]">
      {isCoinLoading && (
        <>
          <div className="flex flex-col items-center gap-[0.8rem]">
            <h1 className="text-title-1-semibold">빠르고 쉽게 코인을 만들어보세요.</h1>
            <p className="whitespace-pre-wrap text-center text-body-2-regular text-gray-700">
              {`이알씨프로(ERCP)는 이더리움 알고리즘으로 만들어진 새로운 메인넷 코인이에요.\n스마트 컨트렉트를 통해 생성되며 입출금시 빠른 전송 속도와 낮은 수수료를 보장해요.\n이더리움과 ERC20 토큰은 전체 토큰 시장 가치의 90%를 차지하고 있어요.
              `}
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem]">
            <Image src="/images/chat/block.gif" alt="loading" width={200} height={200} />
            <p className="text-body-2-semibold">코인을 생성중이에요.</p>
          </div>
        </>
      )}
      {coin && (
        <div className="flex max-w-[68.4rem] flex-col items-center justify-between overflow-auto scrollbar-hide mobile:pb-[10rem] tablet:h-[80vh] desktop:h-[80vh]">
          <div className="flex flex-col items-center gap-[4rem] mobile:gap-[3rem]">
            <div className="flex flex-col items-center gap-y-[0.6rem]">
              <p className="text-title-3-medium text-gray-700">보도블럭에서 Nexters 26기 기념주화를 발행했어요!</p>
              <p className="text-headline-2-bold">{coin.name}</p>
            </div>
            <div className="flex flex-col items-center gap-[2rem]">
              <div className="relative h-[20rem] w-[20rem] md:h-[31.5rem] md:w-[31.5rem]">
                <Image src={coin.image} alt="coin" layout="fill" priority />
              </div>
              <div className="flex items-center gap-[0.8rem]">
                <p className="text-body-2-medium text-gray-600">민팅(Minting) 수량</p>
                <p className="text-body-1-regular">{coin.amount.toLocaleString()}</p>
              </div>
              <button
                onClick={() => {
                  downloadImage(
                    coin.image,
                    `${coin.name}.gif`,
                    () => {},
                    () => showToast('이미지 저장에 실패했어요')
                  );
                  handleSaveImageClick();
                }}
                className="flex items-center rounded-full border border-blue-100 bg-system-light px-[1.6rem] py-[0.6rem] text-body-2-semibold hover:shadow-normal"
              >
                이미지 저장
              </button>
            </div>
          </div>
          <div
            className={clsx(
              'flex text-body-1-semibold text-system-light',
              'mobile:absolute mobile:bottom-0 mobile:w-full mobile:bg-system-light mobile:p-[0.8rem_2rem_3.2rem]'
            )}
          >
            <Link
              href={coin.receipt_link}
              className="flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 mobile:w-full"
              target="_blank"
              onClick={handleOpenReceiptClick}
            >
              코인 영수증 확인하기
            </Link>
          </div>
        </div>
      )}
      {/* {!isLoading && !coin && <CoinForm />} */}
    </div>
  );
};

export default CoinPage;
