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
          <BlockchainEventSection />
        </div>

        <div className="px-[4rem] mobile:px-[2rem]">
          <h2 className="pb-[0.8rem] text-title-1-semibold text-gray-900">최신 뉴스</h2>
          <p className="text-body-2-regular text-gray-700">블록체인 관련 최신 뉴스를 확인하세요!</p>
          <BlockchainNewsSection />
        </div>
      </div>
    </main>
  );
}
