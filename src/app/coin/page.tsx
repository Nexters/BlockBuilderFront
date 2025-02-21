'use client';

import { useToast } from '@/contexts/ToastContext';
import { userStorage } from '@/hooks/useUser';
import { redirect, RedirectType, useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

const CoinPage = () => {
  const { showToast } = useToast();
  const { getData } = userStorage;
  const router = useRouter();
  const coinNameRef = useRef<HTMLInputElement | null>(null);
  const coinSymbolRef = useRef<HTMLInputElement | null>(null);
  const [isRender, setIsRender] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const coinName = coinNameRef?.current?.value;
    const coinSymbol = coinSymbolRef?.current?.value;

    if (!coinName) {
      showToast('코인 이름을 입력해야 만들 수 있어요 !');
      return;
    }

    if (!coinSymbol) {
      showToast('코인 심볼을 입력해야 만들 수 있어요 !');
      return;
    }

    if (coinName && coinSymbol) {
      localStorage.setItem('coinName', coinName);
      localStorage.setItem('coinSymbol', coinSymbol);

      router.push('/coin/success');
    }
  };

  useEffect(() => {
    const coin = getData('coin');
    if (coin) {
      redirect('/coin/success', RedirectType.replace);
    }

    setIsRender(true);
  }, []);

  if (!isRender) {
    return null;
  }

  return (
    <div className="flex size-full flex-col items-center mobile:h-[calc(100vh-5.6rem)]">
      <div className="flex h-full flex-col justify-between px-[1.6rem] pb-[13.4rem] pt-[11.2rem] mobile:w-full">
        <div>
          <div className="flex flex-1 flex-col items-center gap-y-[0.6rem] pb-[8rem] mobile:pb-[4rem]">
            <p className="text-headline-2-bold text-gray-900 mobile:text-headline-4-bold">
              나만의 코인을 생성해볼까요?
            </p>
            <p className="text-title-3-medium text-gray-700 mobile:text-body-2-medium">
              넥스터즈 보도블럭 팀이 당신을 위한 코인을 생성해드릴게요.
            </p>
          </div>

          <form className="flex flex-col gap-y-[8rem]" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-y-[2.4rem]">
              <fieldset className="relative flex flex-col gap-y-[0.8rem]">
                <label htmlFor="coin-name" className="text-body-3-semibold">
                  코인 이름
                </label>
                <div className="relative flex min-h-[5.6rem] w-full items-end">
                  <input
                    id="coin-name"
                    ref={coinNameRef}
                    placeholder="원하는 코인 이름을 입력하세요."
                    className="max-h-[20.4rem] w-full resize-none overflow-y-auto rounded-[0.8rem] border border-blue-100 bg-system-light p-[1.6rem] text-body-1-regular scrollbar-hide focus:bg-gray-100 focus:shadow-normal focus:outline-none focus:ring-1 focus:ring-blue-400 mobile:max-h-[11.6rem]"
                  />
                </div>
              </fieldset>
              <fieldset className="relative flex flex-col gap-y-[0.8rem]">
                <label htmlFor="coin-symbol" className="text-body-3-semibold">
                  코인 심볼
                </label>
                <div className="relative flex min-h-[5.6rem] w-full items-end">
                  <input
                    id="coin-symbol"
                    ref={coinSymbolRef}
                    placeholder="원하는 코인 심볼을 입력하세요."
                    className="max-h-[20.4rem] w-full resize-none overflow-y-auto rounded-[0.8rem] border border-blue-100 bg-system-light p-[1.6rem] text-body-1-regular scrollbar-hide focus:bg-gray-100 focus:shadow-normal focus:outline-none focus:ring-1 focus:ring-blue-400 mobile:max-h-[11.6rem]"
                  />
                </div>
              </fieldset>
            </div>

            <div className="mobile:fixed mobile:bottom-0 mobile:left-0 mobile:z-10 mobile:w-full mobile:bg-background mobile:p-[1.6rem]">
              <button
                type="submit"
                className="mx-auto flex h-[4.8rem] w-[25rem] items-center justify-center rounded-full bg-blue-400 text-body-1-semibold text-white mobile:w-full"
              >
                코인 생성하기
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
