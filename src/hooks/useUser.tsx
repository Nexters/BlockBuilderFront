import { useEffect, useState } from 'react';

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
        const savedUser = localStorage.getItem('for-the-block.storage');
        if (savedUser) {
          setData(JSON.parse(savedUser));
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
        localStorage.setItem('for-the-block.storage', JSON.stringify(userData));
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
