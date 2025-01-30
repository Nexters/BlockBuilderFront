import { Icon } from '@/assets/icons';
import { useState, useRef, useEffect } from 'react';

const SearchBar = () => {
  const [text, setText] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (textareaRef.current) {
      const maxHeight = 5 * 24;
      textareaRef.current.style.height = 'auto';
      const newHeight = Math.min(textareaRef.current.scrollHeight, maxHeight);
      textareaRef.current.style.height = `${newHeight}px`;
    }
  }, [text]);

  const handleSubmit = () => {
    // TODO: 서버에 전송
    if (text.trim().length > 0) {
      console.log(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
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
        onClick={handleSubmit}
        className="absolute flex justify-center items-center size-[3.2rem] right-[1.2rem] bottom-[1.2rem] bg-blue-400 text-white rounded-full disabled:bg-gray-500"
        disabled={text.trim().length === 0}
      >
        <Icon name="ArrowRight" className="text-white" />
      </button>
    </div>
  );
};

export default SearchBar;
