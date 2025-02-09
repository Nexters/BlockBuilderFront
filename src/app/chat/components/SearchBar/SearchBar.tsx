import { Icon } from '@/assets/icons';
import { useRef, useEffect } from 'react';

const MAX_LINE = 5;
const LINE_HEIGHT = 24;

interface SearchBarProps {
  text: string;
  setText: (text: string) => void;
  handleSubmit: (text: string) => void;
  disabled: boolean;
}

const SearchBar = ({ text, setText, handleSubmit, disabled }: SearchBarProps) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (!textareaRef.current) return;

    const maxHeight = MAX_LINE * LINE_HEIGHT;
    const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
    textareaRef.current.style.height = `${newHeight}px`;
  }, [text]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      if (disabled) return;
      if (e.nativeEvent.isComposing) return;
      handleSubmit(text);
    }
  };

  return (
    <div className="absolute bottom-[7.2rem] flex h-auto w-full justify-center px-[4rem]">
      <div className="relative flex min-h-[5.6rem] w-full items-end desktop:max-w-[68.4rem]">
        <textarea
          ref={textareaRef}
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={handleKeyDown}
          rows={1}
          placeholder="궁금한 정보를 모두 물어보세요."
          className="max-h-[12rem] w-full resize-none overflow-y-auto rounded-[2.4rem] border border-blue-100 bg-white py-[1.6rem] pl-[2.2rem] pr-[6rem] text-body-1-regular focus:bg-gray-100 focus:outline-none focus:ring-1 focus:ring-blue-400"
        />
        <button
          type="submit"
          onClick={() => handleSubmit(text)}
          className="absolute bottom-[1.2rem] right-[1.2rem] flex size-[3.2rem] -rotate-90 items-center justify-center rounded-full bg-blue-400 text-white disabled:bg-gray-500"
          disabled={text.trim().length === 0 || disabled}
        >
          <Icon name="ArrowRight" className="text-white" />
        </button>
      </div>
    </div>
  );
};

export default SearchBar;
