import { Nft } from "./type";

import { useEffect } from "react";

import { userStorage } from "@/hooks/useUser";

import { useUser } from "@/hooks/useUser";
import { useState } from "react";
import { TokenUri } from "./type";
import { fetchJson } from "@/utils/api";

const useNft = () => {
  const { data: user } = useUser();
  const { getData, saveData } = userStorage;
  const [nft, setNft] = useState<Nft | null>(null);
  const [tokenUri, setTokenUri] = useState<TokenUri | null>(null);

  useEffect(() => {
    const nft = getData('nft');
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
        saveData({
          type: 'nft',
          data: {
            image_url: nft.image_url,
            opensea: nft.opensea,
            receipt_link: nft.receipt_link,
            tokenId: nft.tokenId,
            tokenUri: nft.tokenUri,
          },
        });
      };
      fetchNft();
    }
  }, [user, getData, saveData]);

  useEffect(() => {
    if (!nft) return;
    const fetchTokenUri = async () => {
      const data = await fetch(nft.tokenUri);
      const tokenUri = await data.json();
      setTokenUri(tokenUri);
    };
    fetchTokenUri();
  }, [nft]);

  return { nft, tokenUri };
};

export default useNft;