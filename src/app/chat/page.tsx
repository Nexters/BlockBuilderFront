'use client';

import { useCallback, useState, useEffect } from 'react';
import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';
import Chat from './components/Chat';
import { ChatType } from './data';
import useGenerateAnswer from './hooks/useGenerateAnswer';

export default function ChatPage() {
  const [text, setText] = useState('');
  const [chatList, setChatList] = useState<ChatType[]>([]);
  const { generateAnswer, isLoading, isAnswering, handleFinishAnswering } = useGenerateAnswer();

  useEffect(() => {
    if (chatList.length > 0) {
      const lastChat = document.querySelector('.chat-message:last-child');
      lastChat?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [chatList]);

  const createChat = useCallback((text: string, isUser: boolean) => {
    setChatList((prev) => [...prev, { id: prev.length + 1, text, isUser }]);
  }, []);

  const handleSubmit = useCallback(
    async (text: string) => {
      if (text.trim().length > 0) {
        setText('');
        createChat(text.trim(), true);
        const result = await generateAnswer(text);
        if (result.isOk) {
          createChat(result.answer, false);
        }
      }
    },
    [createChat, generateAnswer]
  );

  return (
    <div className="chat-background relative size-full">
      {chatList.length === 0 ? (
        <QuestionRecommendation handleSubmit={handleSubmit} />
      ) : (
        <Chat chatList={chatList} isLoading={isLoading} handleFinishAnswering={handleFinishAnswering} />
      )}
      <SearchBar text={text} setText={setText} handleSubmit={handleSubmit} disabled={isAnswering} />
    </div>
  );
}
