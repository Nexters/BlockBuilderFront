'use client';

import { userStorage, useUser } from '@/hooks/useUser';
import { fetchJson } from '@/utils/api';
import { useEffect, useState } from 'react';
import { Nft, TokenUri } from './type';
import Image from 'next/image';
import Link from 'next/link';

const NftPage = () => {
  const [nft, setNft] = useState<Nft | null>(null);
  const { data: user } = useUser();
  const { getNft, saveNft } = userStorage;
  const [tokenUri, setTokenUri] = useState<TokenUri | null>(null);

  useEffect(() => {
    const nft = getNft();
    if (nft) {
      setNft(nft);
    } else {
      if (!user) return;
      const fetchNft = async () => {
        const nft = await fetchJson<Nft>('/api/nft/ca/mint-nft', {
          method: 'POST',
          body: JSON.stringify({
            recipient: user.token,
          }),
        });
        setNft(nft);
        saveNft({
          image_url: nft.image_url,
          opensea: nft.opensea,
          receipt_link: nft.receipt_link,
          tokenId: nft.tokenId,
          tokenUri: nft.tokenUri,
        });
      };
      fetchNft();
    }
  }, [user, getNft, saveNft]);

  useEffect(() => {
    if (!nft) return;
    const fetchTokenUri = async () => {
      const data = await fetch(nft.tokenUri);
      const tokenUri = await data.json();
      setTokenUri(tokenUri);
    };
    fetchTokenUri();
  }, [nft]);

  return (
    <div className="flex size-full flex-col items-center justify-center gap-[4rem] p-[4rem]">
      <div className="flex flex-col items-center gap-[0.8rem]">
        <h1 className="text-title-1-semibold">나만의 NFT를 만들어보세요</h1>
        <p className="text-body-2-regular text-gray-700">
          블록체인 기술을 활용하여 손쉽게 NFT를 만들어보세요. 쉽고 빠르게 소유권을 증명할 수 있는 NFT를 만들어 보세요.
        </p>
      </div>
      {nft && (
        <div className="flex items-center gap-[3.2rem] mobile:flex-col">
          <Image src={nft.image_url} alt="nft" width={200} height={200} />
          <div className="flex flex-col gap-[1.2rem] text-body-2-regular">
            <p className="text-title-2-semibold">
              보도블럭에서 <span className="text-title-1-semibold text-blue-500">{nft.tokenId}</span> 번째로 NFT를
              만들었어요!
            </p>
            {tokenUri && (
              <>
                <p className="text-title-2-semibold">이름: {tokenUri.name}</p>
                <p className="text-body-2-regular">설명: {tokenUri.description}</p>
                <p className="text-title-3-semibold">특성</p>
                <div className="flex gap-[0.4rem]">
                  {tokenUri.attributes.map((attribute) => (
                    <p key={attribute.trait_type} className="rounded-full bg-blue-200 px-[0.8rem] py-[0.4rem]">
                      {attribute.value}
                    </p>
                  ))}
                </div>
              </>
            )}
            <Link href={nft.opensea} className="text-body-2-regular text-blue-500" target="_blank">
              opensea 링크 열기 (NFT 거래 페이지)
            </Link>
            <Link href={nft.receipt_link} className="text-body-2-regular text-blue-500" target="_blank">
              receipt_link 열기 (NFT 영수증 페이지)
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default NftPage;
