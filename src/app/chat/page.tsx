'use client';

import { useState, useContext } from 'react';
import QuestionRecommendation from './components/QuestionRecommendation';
import SearchBar from './components/SearchBar';
import Chat from './components/Chat';
import { ChatType } from './data';
import UserContext from '@/contexts/UserContext';

export default function ChatPage() {
  const { user } = useContext(UserContext);
  const [text, setText] = useState('');
  const [chatList, setChatList] = useState<ChatType[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isGenerating, setIsGenerating] = useState(false);
  console.log(user);

  const handleSubmit = (text: string) => {
    // TODO: 서버에 전송
    if (text.trim().length > 0) {
      setChatList((prev) => [...prev, { id: prev.length + 1, text: text.trim(), isUser: true }]);
      setIsLoading(true);
      setIsGenerating(true);

      setTimeout(() => {
        setChatList((prev) => [
          ...prev,
          {
            id: prev.length + 1,
            text: `블록체인 기술은 최근 다양한 분야에서 혁신을 이끌며 빠르게 발전하고 있습니다. 주요 최신 트렌드는 다음과 같습니다:
  
  탈중앙화 금융(DeFi)의 확장: DeFi는 전통 금융 시스템을 대체하며, 스마트 계약을 통해 중개자 없이 금융 서비스를 제공합니다. 2024년에는 이러한 플랫폼의 사용자 수와 총 예치 자산(TVL)이 더욱 증가할 것으로 예상됩니다. 
  기업의 블록체인 도입 가속화: 물류, 공급망 관리, 데이터 보안 등 다양한 산업 분야에서 블록체인 기술을 채택하여 투명성과 효율성을 높이려는 움직임이 활발합니다. 예를 들어, 월마트는 공급망 관리에 블록체인을 활용하여 제품 추적성을 강화하고 있습니다. 
  
  NFT와 메타버스의 융합: NFT(대체 불가능 토큰)는 디지털 자산의 소유권을 증명하며, 메타버스 내에서 가상 자산 거래와 소유를 가능하게 합니다. 이러한 융합은 예술, 게임, 콘텐츠 제작 분야에서 새로운 경제 생태계를 형성하고 있습니다. 
  계정 추상화(Account Abstraction, AA)의 발전: AA는 블록체인 지갑의 복잡한 절차를 단순화하여 사용자 경험을 향상시키는 기술로, 지갑 복구, 가스비 지불 방식 등에서 혁신을 가져오고 있습니다. `,
            isUser: false,
          },
        ]);
        setIsLoading(false);
      }, 2000);
      setText('');
    }
  };

  const handleFinishGenerating = () => {
    setIsGenerating(false);
  };

  return (
    <div className="relative size-full bg-gray-100">
      {chatList.length === 0 ? (
        <QuestionRecommendation handleSubmit={handleSubmit} />
      ) : (
        <Chat chatList={chatList} isLoading={isLoading} handleFinishGenerating={handleFinishGenerating} />
      )}
      <SearchBar text={text} setText={setText} handleSubmit={handleSubmit} disabled={isGenerating} />
    </div>
  );
}
