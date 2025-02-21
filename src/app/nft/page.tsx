'use client';

import Image from 'next/image';
import Link from 'next/link';
import useNft from './useNft';
import { useToast } from '@/contexts/ToastContext';
import { useMemo } from 'react';
import clsx from 'clsx';
import { downloadImage } from '@/utils/download-image';
import useNftPageActions from './hooks/useNftPageActions';

const NftPage = () => {
  const { nft, tokenUri } = useNft();
  const { showToast } = useToast();
  const { handleSaveImageClick, handleOpenOpenseaClick, handleOpenReceiptClick } = useNftPageActions();

  const hasData = useMemo(() => {
    return nft && tokenUri;
  }, [nft, tokenUri]);

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[4rem] p-[4rem] pb-[6.2rem] mobile:h-[calc(100vh-5.6rem)]">
      {!hasData && (
        <>
          <div className="flex flex-col items-center gap-[0.8rem]">
            <h1 className="text-title-1-semibold">나만의 NFT를 만들어보세요</h1>
            <p className="whitespace-pre-wrap text-center text-body-2-regular text-gray-700">
              {`NFT란 블록체인 기술을 이용해서 디지털 자산의 소유주를 증명하는 가상의 토큰(token)이에요.\n쉽고 빠르게 소유권을 증명할 수 있는 NFT를 만들어보세요.
              `}
            </p>
          </div>
          <div className="flex flex-col items-center gap-[1.2rem]">
            <Image src="/images/chat/block.gif" alt="loading" width={200} height={200} />
            <p className="text-body-2-semibold">NFT를 생성중이에요.</p>
          </div>
        </>
      )}
      {hasData && (
        <div className="scrollbar-hide flex max-w-[68.4rem] flex-col items-center justify-between overflow-auto mobile:pb-[10rem] tablet:h-[80vh] desktop:h-[80vh]">
          <div className="flex flex-col items-center gap-[4rem] mobile:gap-[3rem]">
            <div className="flex flex-col items-center">
              <p className="text-title-3-medium text-gray-700">
                보도블록에서 <span className="text-blue-400">{nft?.tokenId}</span>번째로 만들어진 NFT에요!
              </p>
              <p className="text-center text-headline-2-bold">{tokenUri?.name}</p>
            </div>
            <div className="flex gap-[3rem]">
              <div className="flex flex-col items-center gap-[2rem]">
                <div className="overflow-hidden rounded-[0.8rem]">
                  <Image src={nft!.image_url} alt="nft" width={200} height={200} />
                </div>
                <button
                  onClick={() => {
                    downloadImage(
                      nft!.image_url,
                      `${tokenUri?.name}.png`,
                      () => {},
                      () => showToast('이미지 저장에 실패했어요')
                    );
                    handleSaveImageClick();
                  }}
                  className="bg-system-light flex items-center rounded-full border border-blue-100 px-[1.6rem] py-[0.6rem] text-body-2-semibold hover:shadow-normal"
                >
                  이미지 저장
                </button>
              </div>
              <div className="flex flex-1 flex-col gap-[2rem] mobile:hidden">
                <div className="flex flex-col gap-[0.8rem]">
                  <p className="text-body-2-medium text-gray-600">설명</p>
                  <p className="text-body-1-regular">{tokenUri?.description}</p>
                </div>
                <div className="flex flex-col gap-[0.8rem]">
                  <p className="text-body-2-medium text-gray-600">특성</p>
                  <div className="flex flex-wrap gap-[0.8rem]">
                    {tokenUri?.attributes.map((attribute) => (
                      <p
                        key={attribute.trait_type}
                        className="rounded-full bg-blue-100 px-[1.2rem] py-[0.6rem] text-body-2-semibold text-blue-400"
                      >
                        {attribute.value}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div
            className={clsx(
              'text-system-light flex gap-[2rem] text-body-1-semibold',
              'mobile:bg-system-light mobile:absolute mobile:bottom-0 mobile:w-full mobile:flex-col mobile:gap-[1.2rem] mobile:p-[0.8rem_2rem_3.2rem]'
            )}
          >
            <Link
              href={nft!.opensea}
              className="flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 mobile:w-full"
              target="_blank"
              onClick={() => {
                handleOpenOpenseaClick();
              }}
            >
              opensea에서 확인하기
            </Link>
            <Link
              href={nft!.receipt_link}
              className="flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 mobile:w-full"
              target="_blank"
              onClick={() => {
                handleOpenReceiptClick();
              }}
            >
              NFT 영수증 확인하기
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftPage;
