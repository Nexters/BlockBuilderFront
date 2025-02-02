import Image from 'next/image';
import { useState, useEffect, useMemo } from 'react';

const BotBubble = ({
  text,
  isLoading,
  handleFinishGenerating,
}: {
  text: string;
  isLoading?: boolean;
  handleFinishGenerating?: () => void;
}) => {
  const [displayText, setDisplayText] = useState('');
  const words = useMemo(() => text.split(' ') ?? [], [text]);

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex < words.length) {
        const word = words[currentIndex];
        if (word !== undefined) {
          setDisplayText((prev) => prev + (currentIndex === 0 ? '' : ' ') + word);
        }
        currentIndex++;
      } else {
        clearInterval(timer);
        handleFinishGenerating?.();
      }
    }, 80);

    return () => clearInterval(timer);
  }, [handleFinishGenerating, text, words]);

  return (
    <div className="flex gap-[1.6rem]">
      <div className="size-[4rem] shrink-0">
        <Image src="/images/chat/bot-profile.png" alt="bot-profile" width={40} height={40} />
      </div>
      <div className="text-body-1-medium whitespace-break-spaces">
        {isLoading ? '답변 생성중입니다..' : displayText}
      </div>
    </div>
  );
};

export default BotBubble;
