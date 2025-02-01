'use client';

import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';

export default function ChatPage() {
  return (
    <div className="relative size-full bg-gray-100">
      <QuestionRecommendation />
      <SearchBar />
    </div>
  );
}
