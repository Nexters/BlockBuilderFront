import { useEffect, useState } from 'react';
import { fetchJson } from '../utils/api';
import { Nft } from '@/app/nft/type';
import { Coin } from '@/app/coin/type';

export const STORAGE_KEY = 'for-the-block.storage';

type walletMeResponse = {
  encrypted_mnemonic: string;
  encrypted_private_key: string;
  ethereum_address: string;
  iv_mnemonic: string;
  iv_private_key: string;
  nickname: string;
};

export const userStorage = {
  getUserData: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  },
  saveUserData: (userData: { token: string; nickname: string }) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  },

  getQuizResult: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).quizResult : null;
  },
  saveQuizResult: (result: { correctCount: number; submittedAnswer: string[] }) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const userData = saved ? JSON.parse(saved) : null;
    if (userData) {
      userData.quizResult = result;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ quizResult: result }));
    }
  },

  getNft: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).nft : null;
  },
  saveNft: (nft: Nft) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const userData = saved ? JSON.parse(saved) : null;
    if (userData) {
      userData.nft = nft;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ nft }));
    }
  },

  getCoin: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved).coin : null;
  },
  saveCoin: (coin: Coin) => {
    const saved = localStorage.getItem(STORAGE_KEY);
    const userData = saved ? JSON.parse(saved) : null;
    if (userData) {
      userData.coin = coin;
      localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
    } else {
      localStorage.setItem(STORAGE_KEY, JSON.stringify({ coin }));
    }
  },
};

export const useUser = () => {
  const [data, setData] = useState<{
    token: string;
    nickname: string;
  } | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const savedUser = userStorage.getUserData();
        if (savedUser) {
          setData(savedUser);
          setIsLoading(false);
          return;
        }

        const fetchedData = await fetchJson<walletMeResponse>('/api/wallet/me');
        const userData = {
          token: fetchedData.ethereum_address,
          nickname: fetchedData.nickname,
        };

        setData(userData);
        userStorage.saveUserData(userData);
      } catch (err: unknown) {
        setError((err as Error).message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUser();
  }, []);

  return { data, isLoading, error };
};
