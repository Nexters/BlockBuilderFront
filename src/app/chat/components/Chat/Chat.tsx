import { ChatType } from '../../data';
import BotBubble from './BotBubble';
import UserBubble from './UserBubble';

interface ChatProps {
  chatList: ChatType[];
  isLoading: boolean;
  handleFinishAnswering: () => void;
}

const Chat = ({ chatList, isLoading, handleFinishAnswering }: ChatProps) => {
  return (
    <div className="flex h-[calc(100vh-13.8rem)] w-full flex-col gap-[4rem] overflow-y-auto px-[4rem] py-[6.4rem]">
      {chatList.map((chat) =>
        chat.isUser ? (
          <UserBubble key={chat.id} text={chat.text} />
        ) : (
          <BotBubble key={chat.id} text={chat.text} handleFinishAnswering={handleFinishAnswering} />
        )
      )}
      {isLoading && <BotBubble text="" isLoading={isLoading} />}
    </div>
  );
};

export default Chat;
