import { Suspense } from 'react';
import BlockchainEventSection from './components/BlockchainEventSection/BlockchainEventSection.server';
import BlockchainNewsSection from './components/BlockchainNewsSection/BlockchainNewsSection.server';

export default function InformationPage() {
  return (
    <main className="min-h-screen">
      <div
        className="mx-auto flex flex-col py-[6.4rem] tablet:max-w-[70.8rem] desktop:max-w-[76.4rem]"
        style={{ flexDirection: 'column', rowGap: '7rem' }}
      >
        <div>
          <h2 className="px-[4rem] pb-[2rem] text-title-1-semibold text-gray-900 mobile:px-[2rem]">이벤트</h2>
          <Suspense fallback={<BlockchainEventSectionSkeleton />}>
            <BlockchainEventSection />
          </Suspense>
        </div>

        <div className="px-[4rem] mobile:px-[2rem]">
          <h2 className="pb-[0.8rem] text-title-1-semibold text-gray-900">최신 뉴스</h2>
          <p className="text-body-2-regular text-gray-700">블록체인 관련 최신 뉴스를 확인하세요!</p>
          <Suspense fallback={<BlockchainNewsSectionSkeleton />}>
            <BlockchainNewsSection />
          </Suspense>
        </div>
      </div>
    </main>
  );
}

const BlockchainEventSectionSkeleton = () => {
  return (
    <div>
      <div className="mb-[2.4rem] ml-[4rem] h-[3.2rem] w-[10rem] animate-pulse bg-gray-400 mobile:ml-[2rem]" />

      <div className="grid grid-flow-col grid-rows-2 gap-[2rem] pl-[4rem] mobile:pl-[2rem]">
        {Array.from({ length: 4 }).map((_, index) => (
          <div key={`BlockchainEventSectionSkeleton_${index}`} className="h-[14.4rem] animate-pulse bg-gray-400" />
        ))}
      </div>
    </div>
  );
};

const BlockchainNewsSectionSkeleton = () => {
  return (
    <div className="grid grid-cols-1 gap-x-[1.5rem] gap-y-[2.4rem] pt-[2.4rem] tablet:grid-cols-2 desktop:grid-cols-3">
      {Array.from({ length: 6 }).map((_, index) => (
        <div key={`BlockchainEventSectionSkeleton_${index}`} className="h-[15rem] animate-pulse bg-gray-400" />
      ))}
    </div>
  );
};
