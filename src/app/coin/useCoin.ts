import { useUser } from '@/hooks/useUser';

import { useState } from 'react';

import { userStorage } from '@/hooks/useUser';
import { fetchJson } from '@/utils/api';
import { useEffect } from 'react';
import { Coin } from './type';

const useCoin = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { data: user } = useUser();
  const { getData, saveData } = userStorage;
  const [coin, setCoin] = useState<Coin | null>(null);

  useEffect(() => {
    const coin = getData('coin');
    if (coin) {
      setCoin(coin);
    } else {
      if (!user) return;

      setIsLoading(true);
      const coinName = localStorage.getItem('coinName');
      const coinSymbol = localStorage.getItem('coinSymbol');

      const fetchCoin = async () => {
        const coin = await fetchJson<Coin>('/api/nft/ca/mint-ft', {
          method: 'POST',
          body: JSON.stringify({
            recipient: '0xAf150Cb45FF446C856F9de79aa316174ef4b391F',
            image:
              'https://ivory-holy-bonobo-724.mypinata.cloud/ipfs/bafybeigr5argszzztfoqbif2r557jjm74n6oe4dkef6wwhktpsyocaopsm',
            name: coinName,
            symbol: coinSymbol,
            amount: 1000,
          }),
        });
        setCoin(coin);
        saveData({
          type: 'coin',
          data: {
            receipt_link: coin.receipt_link,
            image: coin.image,
            name: coin.name,
            symbol: coin.symbol,
            amount: coin.amount,
            result: coin.result,
          },
        });
        setIsLoading(false);
      };
      fetchCoin();
    }
  }, [getData, saveData, user]);

  return { coin, isLoading };
};

export default useCoin;
