'use client';
import { useState } from 'react';
import RadioOption from './RadioOption';

export default function Poll() {
  const [selected, setSelected] = useState('이더리움 메인넷');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSelected(e.target.value);
  };

  return (
    <fieldset className="px-[3rem] py-[2.4rem]">
      <p className="text-title-3-semibold text-gray-900">어디서 빌딩하고 싶으세요?</p>
      <div className="mt-[0.6rem] flex justify-between">
        <p className="text-body-2-medium text-gray-700">354명 참여중</p>
      </div>
      <div className="mb-[4rem] mt-[3rem] flex flex-col gap-[2rem]">
        <RadioOption
          name="blockchain"
          value="이더리움 메인넷"
          label="이더리움 메인넷"
          percentage={60}
          checked={selected === '이더리움 메인넷'}
          onChange={handleChange}
        />
        <RadioOption
          name="blockchain"
          value="솔라나"
          label="솔라나"
          percentage={40}
          checked={selected === '솔라나'}
          onChange={handleChange}
        />
      </div>
      <div className="flex w-full justify-center">
        <button
          type="submit"
          className="h-[4.8rem] w-[40rem] rounded-[0.8rem] bg-blue-400 text-body-1-semibold text-gray-100"
        >
          투표하기
        </button>
      </div>
    </fieldset>
  );
}
