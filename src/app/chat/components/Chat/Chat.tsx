import { ChatType } from '../../data';
import BotBubble from './BotBubble';
import UserBubble from './UserBubble';

interface ChatProps {
  chatList: ChatType[];
  isLoading: boolean;
  handleFinishGenerating: () => void;
}

const Chat = ({ chatList, isLoading, handleFinishGenerating }: ChatProps) => {
  return (
    <div className="flex flex-col gap-[4rem] w-full h-[calc(100vh-13.8rem)] overflow-y-auto px-[4rem] py-[6.4rem]">
      {chatList.map((chat) =>
        chat.isUser ? (
          <UserBubble key={chat.id} text={chat.text} />
        ) : (
          <BotBubble key={chat.id} text={chat.text} handleFinishGenerating={handleFinishGenerating} />
        )
      )}
      {isLoading && <BotBubble text="" isLoading={isLoading} />}
    </div>
  );
};

export default Chat;
