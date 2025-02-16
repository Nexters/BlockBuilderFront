import { ChatType } from '../../data';
import BotBubble from './BotBubble';
import UserBubble from './UserBubble';

interface ChatProps {
  chatList: ChatType[];
  isLoading: boolean;
  handleFinishAnswering: () => void;
  isAnswering: boolean;
  recreateChat: (id: number) => void;
}

const Chat = ({ chatList, isLoading, handleFinishAnswering, isAnswering, recreateChat }: ChatProps) => {
  return (
    <div className="flex h-[calc(100vh-13.8rem)] w-full flex-col gap-[4rem] overflow-y-auto px-[4rem] py-[6.4rem] mobile:h-[calc(100vh-19.4rem)]">
      {chatList.map((chat) =>
        chat.isUser ? (
          <UserBubble key={chat.id} text={chat.text} />
        ) : (
          <BotBubble
            key={chat.id}
            id={chat.id}
            text={chat.text}
            handleFinishAnswering={handleFinishAnswering}
            isAnswering={isAnswering}
            recreateChat={recreateChat}
            isLastMessage={chat.id === chatList[chatList.length - 1].id}
          />
        )
      )}
      {isLoading && <BotBubble text="" isLoading={isLoading} />}
    </div>
  );
};

export default Chat;
