import Image from 'next/image';
import { useState, useEffect, useMemo, memo } from 'react';
import { TextShimmer } from '@/components/ui/TextShimmer';

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

    useEffect(() => {
      const lastChat = document.querySelector('.chat-message:last-child');
      lastChat?.scrollIntoView({ behavior: 'smooth', block: 'end' });
    }, [displayText]);

    return (
      <div className="chat-message flex w-full gap-[1.6rem]">
        <div className="size-[4rem] shrink-0 rounded-[1.2rem] bg-blue-400">
          <Image
            src={isLoading ? '/images/chat/block-creating.gif' : '/images/chat/block-created.png'}
            alt="block"
            width={40}
            height={40}
          />
        </div>
        {isLoading ? (
          <div className="max-w-[calc(100%-5.6rem)] flex-1 text-body-1-medium">
            <TextShimmer duration={1}>답변 생성중입니다..</TextShimmer>
          </div>
        ) : (
          <div
            className="max-w-[calc(100%-5.6rem)] flex-1 whitespace-break-spaces text-body-1-medium [&>*]:w-full [&>*]:whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: displayText }}
          />
        )}
      </div>
    );
  }
);

BotBubble.displayName = 'BotBubble';

export default BotBubble;
