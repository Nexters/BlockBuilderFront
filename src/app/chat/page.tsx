'use client';

import { useUser } from '@/hooks/useUser';
import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';

export default function ChatPage() {
  const { data } = useUser();

  console.log(data);
  return (
    <div className="relative size-full bg-gray-100">
      <QuestionRecommendation />
      <SearchBar />
    </div>
  );
}
