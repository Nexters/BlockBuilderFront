export default function Nickname() {
  const handleChangeNickname = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log('e: ', e.target.value);
  };

  return (
    <div className="flex items-center gap-[1.6rem]">
      <label htmlFor="nickname" className="text-body-2-medium text-gray-600">
        닉네임
      </label>
      <div className="relative">
        <input
          type="text"
          id="nickname"
          value="명랑한고릴라"
          className="h-[4.2rem] w-full min-w-[18.5rem] rounded-[0.8rem] border border-gray-300 py-[0.8rem] pl-[1.2rem] pr-[1rem] text-body-1-medium text-gray-700 shadow-sm focus:outline-none"
          onChange={handleChangeNickname}
        />
        <button className="absolute right-[1rem] top-1/2 -translate-y-1/2 bg-gray-100 px-[0.8rem] py-[0.2rem] text-body-2-semibold text-gray-600">
          랜덤변경
        </button>
      </div>
    </div>
  );
}
