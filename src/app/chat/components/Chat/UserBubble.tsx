const UserBubble = ({ text }: { text?: string }) => {
  return <div className="text-body-1-medium self-end bg-blue-200 rounded-[1.6rem] p-[2rem]">{text}</div>;
};

export default UserBubble;
