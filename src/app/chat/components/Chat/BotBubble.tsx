import Image from 'next/image';
import { useState, useEffect, useMemo, memo, useCallback } from 'react';
import { TextShimmer } from '@/components/ui/TextShimmer';
import ToolButton from './ToolButton';
import clsx from 'clsx';

const BotBubble = memo(
  ({
    id,
    text,
    isLoading,
    handleFinishAnswering,
    isAnswering,
    recreateChat,
    isLastMessage,
  }: {
    id?: number;
    text: string;
    isLoading?: boolean;
    handleFinishAnswering?: () => void;
    isAnswering?: boolean;
    recreateChat?: (id: number) => void;
    isLastMessage?: boolean;
  }) => {
    const [displayText, setDisplayText] = useState('');
    const words = useMemo(() => text.split(' ') ?? [], [text]);

    const handleCopy = useCallback(() => {
      const textToCopy = text.replace(/<[^>]*>/g, '');
      navigator.clipboard.writeText(textToCopy);
    }, [text]);

    useEffect(() => {
      if (!isLastMessage) return;
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
    }, [handleFinishAnswering, isLastMessage, text, words]);

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
          <div className="flex max-w-[calc(100%-5.6rem)] flex-1 flex-col gap-[0.8rem]">
            <div
              className={clsx(
                'flex w-full flex-col gap-[0.8rem] whitespace-normal text-body-1-medium',
                '[&>*]:w-full [&>*]:whitespace-normal',
                '[&>table]:border [&>table]:border-gray-400',
                '[&_th]:border [&_th]:border-gray-400 [&_th]:p-2',
                '[&_td]:border [&_td]:border-gray-400 [&_td]:p-2'
              )}
              dangerouslySetInnerHTML={{ __html: displayText }}
            />
            {(!isAnswering || !isLastMessage) && (
              <div className="flex gap-[1rem]">
                <ToolButton size={28} icon="Copy" onClick={handleCopy} />
                <ToolButton icon="Reaction" onClick={() => recreateChat?.((id ?? 0) - 1)} />
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

BotBubble.displayName = 'BotBubble';

export default BotBubble;
