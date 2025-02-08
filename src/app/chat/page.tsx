'use client';

import { useContext } from 'react';
import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';
import UserContext from '@/contexts/UserContext';

export default function ChatPage() {
  const { user } = useContext(UserContext);

  console.log(user);
  return (
    <div className="relative size-full bg-gray-100">
      <QuestionRecommendation />
      <SearchBar />
    </div>
  );
}
