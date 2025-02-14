const UserBubble = ({ text }: { text?: string }) => {
  return (
    <div className="chat-message self-end rounded-[1.6rem] bg-blue-200 p-[2rem] text-body-1-medium mobile:max-w-[24rem] tablet:max-w-[34rem] desktop:max-w-[50rem]">
      {text}
    </div>
  );
};

export default UserBubble;
