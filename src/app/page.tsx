import Card from './landing/Card';

export default function Home() {
  return (
    <div className="scrollbar-hide flex h-screen w-full flex-col items-center gap-[4rem] overflow-auto px-[4rem] py-[5rem] mobile:h-[calc(100vh-5.6rem)] mobile:px-[2rem]">
      <div className="flex flex-col items-center gap-[0.8rem]">
        <h1 className="text-title-1-semibold">보도블럭에서 블럭체인을 경험해볼까요?</h1>
        <p className="text-body-2-regular text-gray-700">어렵기만 했던 블록체인, 직접 경험하면서 쉽게 이해해보세요.</p>
      </div>
      <div className="flex w-full flex-col items-center gap-[1.6rem]">
        <Card
          type="quiz"
          title="블록체인 퀴즈"
          description="간단한 블록체인 퀴즈를 풀고, 내 수준을 확인하세요!"
          url="/quiz"
        />
        <Card type="coin" title="나만의 코인 생성" description="클릭만으로 간단하게 코인을 생성해보세요!" url="/coin" />
        <Card type="nft" title="나만의 NFT 생성" description="클릭만으로 간단하게 NFT를 생성해보세요!" url="/nft" />
      </div>
    </div>
  );
}
