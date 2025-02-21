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
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  },
  saveUserData: (userData: { token: string; nickname: string }) => {
    if (typeof window === 'undefined') return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
  },

  getData: (type: 'quiz' | 'nft' | 'coin') => {
    if (typeof window === 'undefined') return null;
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved)[type] : null;
  },
  saveData: ({
    type,
    data,
  }:
    | {
        type: 'quiz';
        data: { correctCount: number; submittedAnswer: string[] };
      }
    | {
        type: 'nft';
        data: Nft;
      }
    | {
        type: 'coin';
        data: Coin;
      }) => {
    if (typeof window === 'undefined') return;
    const saved = localStorage.getItem(STORAGE_KEY);
    const userData = saved ? JSON.parse(saved) : {};
    userData[type] = data;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userData));
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
