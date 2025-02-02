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
    <div className="absolute left-1/2 -translate-x-1/2 bottom-[8.2rem] min-h-[5.6rem] w-[84rem] flex items-end">
      <textarea
        ref={textareaRef}
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        rows={1}
        placeholder="보도블록에게 궁금한 블록체인 정보를 물어보세요."
        className="text-body-1-regular bg-gray-200 w-full py-[1.6rem] pl-[2.2rem] pr-[6rem] rounded-[2.4rem] resize-none focus:outline-none focus:ring-1 focus:ring-blue-400 focus:bg-gray-100 max-h-[12rem] overflow-y-auto"
      />
      <button
        type="submit"
        onClick={() => handleSubmit(text)}
        className="absolute flex justify-center items-center size-[3.2rem] right-[1.2rem] bottom-[1.2rem] bg-blue-400 text-white rounded-full disabled:bg-gray-500 -rotate-90"
        disabled={text.trim().length === 0 || disabled}
      >
        <Icon name="ArrowRight" className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
