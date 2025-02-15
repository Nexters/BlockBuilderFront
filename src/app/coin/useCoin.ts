import { useUser } from "@/hooks/useUser";

import { useState } from "react";

import { fetchJson } from "@/utils/api";
import { useEffect } from "react";
import { Coin } from "./type";
import { userStorage } from "@/hooks/useUser";

const useCoin = () => {
  const { data: user } = useUser();
  const { getCoin, saveCoin } = userStorage;
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const coin = getCoin();
    if (coin) {
      setCoin(coin);
    } else {
      if (!user) return;
      const fetchCoin = async () => {
        const coin = await fetchJson<Coin>('/api/nft/ca/mint-ft', {
          method: 'POST',
          body: JSON.stringify({
            "recipient": "0xAf150Cb45FF446C856F9de79aa316174ef4b391F",
            image: 'https://ivory-holy-bonobo-724.mypinata.cloud/ipfs/bafybeigr5argszzztfoqbif2r557jjm74n6oe4dkef6wwhktpsyocaopsm',
            name: 'BODO_BLOCK',
            symbol: 'BOD',
            amount: 1000,
          }),
        });
        setCoin(coin);
        saveCoin({
          receipt_link: coin.receipt_link,
          image: coin.image,
          name: coin.name,
          symbol: coin.symbol,
          amount: coin.amount,
          result: coin.result,
        });
      };
      fetchCoin();
    }
  }, [getCoin, saveCoin, user]);
  return { coin };
};

export default useCoin;
