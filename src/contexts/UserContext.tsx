'use client';

import { useUser } from '@/hooks/useUser';
import { createContext } from 'react';

interface UserContextType {
  user: {
    token: string;
    nickname: string;
  } | null;
}

const UserContext = createContext<UserContextType>({
  user: null,
});

export default UserContext;

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const { data: user } = useUser();

  return <UserContext.Provider value={{ user }}>{children}</UserContext.Provider>;
};
