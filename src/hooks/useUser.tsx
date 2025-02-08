import { useEffect, useState } from 'react';

const STORAGE_KEY = 'for-the-block.storage';

const userStorage = {
  getUserData: () => {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved ? JSON.parse(saved) : null;
  },
  saveUserData: (userData: { token: string; nickname: string }) => {
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

        const response = await fetch('/api/wallet/me');
        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const fetchedData = await response.json();
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
