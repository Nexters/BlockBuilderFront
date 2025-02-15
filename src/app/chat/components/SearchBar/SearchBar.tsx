import { Icon } from '@/assets/icons';
import { useRef, useEffect, useCallback } from 'react';

const MAX_HEIGHT = 204;
const LINE_HEIGHT = 24;

interface SearchBarProps {
  text: string;
  setText: (text: string) => void;
  handleSubmit: (text: string) => void;
  disabled: boolean;
}

const SearchBar = ({ text, setText, handleSubmit, disabled }: SearchBarProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const resetHeight = useCallback(() => {
    if (!textareaRef.current) return;
    textareaRef.current.style.height = 'auto';
  }, []);

  const calculateHeight = useCallback(() => {
    if (!textareaRef.current) return;

    // 임시로 높이를 초기화하여 실제 스크롤 높이를 측정
    textareaRef.current.style.height = `${LINE_HEIGHT}px`;

    // padding 값을 제외한 실제 content 높이 계산 (상하 padding 각각 1.6rem = 16px)
    const contentHeight = textareaRef.current.scrollHeight - 32;
    const lines = Math.ceil(contentHeight / LINE_HEIGHT);
    const newHeight = Math.min(lines * LINE_HEIGHT, MAX_HEIGHT) + 32; // padding 다시 추가

    textareaRef.current.style.height = `${newHeight}px`;
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        if (disabled) return;
        if (e.nativeEvent.isComposing) return;
        handleSubmit(text);
        resetHeight();
      }
    },
    [disabled, handleSubmit, text, resetHeight]
  );

  useEffect(() => {
    calculateHeight();
  }, [calculateHeight, text]);

  return (
    <div className="absolute bottom-0 flex h-auto w-full justify-center rounded-t-[2.4rem] pb-[7.2rem] backdrop-blur-[15px] mobile:mx-[2rem] mobile:w-[calc(100%-4rem)] tablet:mx-[4rem] tablet:w-[calc(100%-8rem)] desktop:left-1/2 desktop:max-w-[68.4rem] desktop:-translate-x-1/2">
      <div className="relative flex min-h-[5.6rem] w-full items-end">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="궁금한 정보를 모두 물어보세요."
          className="scrollbar-hide bg-system-light max-h-[20.4rem] w-full resize-none overflow-y-auto rounded-[2.4rem] border border-blue-100 py-[1.6rem] pl-[2.2rem] pr-[6rem] text-body-1-regular focus:bg-gray-100 focus:shadow-normal focus:outline-none focus:ring-1 focus:ring-blue-400 mobile:max-h-[11.6rem]"
        />
        <button
          type="submit"
          onClick={() => handleSubmit(text)}
          className="text-system-light absolute bottom-[1.2rem] right-[1.2rem] flex size-[3.2rem] -rotate-90 items-center justify-center rounded-full bg-blue-400 disabled:bg-gray-500"
          disabled={text.trim().length === 0 || disabled}
        >
          <Icon name="ArrowRight" className="text-system-light" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
