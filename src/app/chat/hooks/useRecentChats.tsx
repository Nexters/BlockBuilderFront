import { fetchJson } from '@/utils/api';
import { useState, useContext, useEffect } from 'react';
import UserContext from '@/contexts/UserContext';

type Chat = {
  id: number;
  title: string;
  created_at: string;
  session_id: number;
  sender: string;
  message: string;
};

const useRecentChats = () => {
  const [recentChats, setRecentChats] = useState<string[]>([]);
  const { user } = useContext(UserContext);

  useEffect(() => {
    const fetchChats = async () => {
      if (!user?.token) return;
      const data = await fetchJson<Chat[]>(`/api/agent/chat?eoa=${user.token}`);
      const titles = data.reduce((acc: string[], item: Chat) => {
        if (!acc.includes(item.title)) {
          acc.push(item.title);
        }
        return acc;
      }, []);
      setRecentChats(titles);
    };
    fetchChats();
  }, [user?.token]);

  return { recentChats };
};

export default useRecentChats;
