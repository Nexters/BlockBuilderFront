'use client';

import { useState } from 'react';
import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';
import Chat from './components/Chat';
import { ChatType } from './data';
import useGenerateAnswer from './hooks/useGenerateAnswer';

export default function ChatPage() {
  const [text, setText] = useState('');
  const [chatList, setChatList] = useState<ChatType[]>([]);
  const { generateAnswer, isLoading, isAnswering, handleFinishAnswering } = useGenerateAnswer();

  const handleSubmit = async (text: string) => {
    if (text.trim().length > 0) {
      setText('');
      createChat(text.trim(), true);
      const result = await generateAnswer(text);
      if (result.isOk) {
        createChat(result.answer, false);
      }
    }
  };

  const createChat = (text: string, isUser: boolean) => {
    setChatList((prev) => [...prev, { id: prev.length + 1, text, isUser }]);
  };

  return (
    <div className="relative size-full bg-gray-100">
      {chatList.length === 0 ? (
        <QuestionRecommendation handleSubmit={handleSubmit} />
      ) : (
        <Chat chatList={chatList} isLoading={isLoading} handleFinishAnswering={handleFinishAnswering} />
      )}
      <SearchBar text={text} setText={setText} handleSubmit={handleSubmit} disabled={isAnswering} />
    </div>
  );
}
