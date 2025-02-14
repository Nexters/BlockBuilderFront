import { useEffect, useState } from 'react';

export const STORAGE_KEY = 'for-the-block.storage';

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
        console.log('response: ', response);
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
