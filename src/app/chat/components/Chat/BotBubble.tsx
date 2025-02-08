import Image from 'next/image';
import { useState, useEffect, useMemo, memo } from 'react';

const BotBubble = memo(
  ({
    text,
    isLoading,
    handleFinishAnswering,
  }: {
    text: string;
    isLoading?: boolean;
    handleFinishAnswering?: () => void;
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
          handleFinishAnswering?.();
        }
      }, 50);

      return () => clearInterval(timer);
    }, [handleFinishAnswering, text, words]);

    return (
      <div className="flex w-full gap-[1.6rem]">
        <div className="size-[4rem] shrink-0">
          <Image src="/images/chat/bot-profile.png" alt="bot-profile" width={40} height={40} />
        </div>
        <div
          className="max-w-[calc(100%-5.6rem)] flex-1 whitespace-break-spaces text-body-1-medium [&>*]:w-full [&>*]:whitespace-pre-line"
          dangerouslySetInnerHTML={{ __html: isLoading ? '답변 생성중입니다..' : displayText }}
        />
      </div>
    );
  }
);

BotBubble.displayName = 'BotBubble';

export default BotBubble;
