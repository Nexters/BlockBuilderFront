const UserBubble = ({ text }: { text?: string }) => {
  return <div className="chat-message self-end rounded-[1.6rem] bg-blue-200 p-[2rem] text-body-1-medium">{text}</div>;
};

export default UserBubble;
