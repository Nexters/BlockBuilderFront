'use client';

import useRecentChats from '@/app/chat/hooks/useRecentChats';

export default function RecentSearchKeyword() {
  const { recentChats } = useRecentChats();

  return (
    <>
      <h3 className="p-[1.2rem] text-body-2-medium text-gray-600">최근 검색어</h3>
      <ul className="flex flex-col gap-[0.4rem]">
        {recentChats.map((text, index) => (
          <li key={index} className="cursor-pointer truncate px-[1.2rem] py-[0.6rem] text-body-2-regular text-gray-900">
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
