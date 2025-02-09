'use client';
import clsx from 'clsx';
import Nickname from '../Nickname';
import { useState } from 'react';

export default function Tabs({ children }: { children: React.ReactNode }) {
  const [currentTab, setCurrentTab] = useState<'ongoing' | 'end'>('ongoing');

  return (
    <div className="mt-[2.8rem] flex flex-col gap-[2.8rem]">
      <div className="flex w-full">
        <button
          className={clsx(
            'h-[3.4rem] w-[50%] border-b-2 text-body-2-semibold',
            currentTab === 'ongoing' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'
          )}
          onClick={() => setCurrentTab('ongoing')}
        >
          진행중인 투표
        </button>
        <button
          className={clsx(
            'h-[3.4rem] w-[50%] border-b-2 text-body-2-semibold',
            currentTab === 'end' ? 'border-blue-500 text-blue-500' : 'border-transparent text-gray-700'
          )}
          onClick={() => setCurrentTab('end')}
        >
          종료된 투표
        </button>
      </div>
      <Nickname />
      {children}
    </div>
  );
}
