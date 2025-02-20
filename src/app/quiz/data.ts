export const questions = [
  {
    id: 1,
    question: '블록체인 기술이 기존 중앙집중식 데이터베이스와 가장 다른 점은 무엇일까요?',
    options: [
      '데이터가 중앙 서버에 저장된다.',
      '모든 네트워크 참여자가 거래 내역을 공동으로 검증하고 저장한다.',
      '거래가 빠른 처리를 위해 중앙 기관의 실시간 승인을 거친다.',
      '데이터 변경이 용이하여 유연하게 관리된다.',
    ],
    correctAnswer: '모든 네트워크 참여자가 거래 내역을 공동으로 검증하고 저장한다.',
    explanation: `기존의 중앙집중식 데이터베이스는 한 곳(중앙 서버)에 모든 데이터가 저장되고 관리되기 때문에, 서버 장애나 해킹 등의 위험에 취약할 수 있습니다. 반면, 블록체인은 분산 원장 기술을 기반으로 하여, 네트워크에 참여하는 모든 노드가 동일한 거래 내역을 공유하고 검증합니다.
    
- 분산 저장: 데이터가 여러 컴퓨터에 분산되어 저장되므로, 단일 장애점(Single Point of Failure)이 존재하지 않습니다.
- 합의 알고리즘: 네트워크 참여자들이 특정 합의 알고리즘을 통해 거래의 진위를 검증하기 때문에, 중앙 기관 없이도 거래의 신뢰성을 확보할 수 있습니다.
    
따라서, “모든 네트워크 참여자가 거래 내역을 공동으로 검증하고 저장한다.”가 블록체인의 핵심 차별점입니다.`,
  },
  {
    id: 2,
    question: '다음 중 블록체인 기술이 가장 적절하게 적용될 수 있는 분야가 아닌 것은 무엇일까요?',
    options: ['디지털 신원 인증', '분산 금융(DeFi)', '컴퓨터 그래픽 렌더링', '암호화폐 토큰 발행'],
    correctAnswer: '컴퓨터 그래픽 렌더링',
    explanation: `블록체인 기술은 주로 데이터의 신뢰성과 투명성, 분산화를 필요로 하는 분야에 적용됩니다.

- 디지털 신원 인증: 개인의 신원 정보를 안전하게 관리하고 검증하는 데 유용합니다.
- 분산 금융(DeFi): 중앙 기관 없이 금융 거래 및 서비스를 제공하는 데 활용됩니다.
- 암호화폐 토큰 발행: 투명한 거래와 거래 기록 보존을 위해 필수적인 기술입니다.

반면, 컴퓨터 그래픽 렌더링은 고성능 컴퓨팅과 관련된 분야로, 데이터의 분산 저장이나 검증보다는 연산 능력이 중요한 분야입니다. 따라서 블록체인 기술의 강점이 크게 적용되지 않습니다.`,
  },
  {
    id: 3,
    question: '다음 중 정부가 발행하고 법정 화폐와 동일한 가치를 가지는 디지털 화폐는 무엇일까요?',
    options: ['스테이블코인', 'CBDC', 'USDT', '디지털 원화'],
    correctAnswer: 'CBDC',
    explanation: `CBDC는 “Central Bank Digital Currency”의 약자로, 중앙은행이 직접 발행하는 디지털 화폐를 의미합니다.

- 정부 발행: 법정 화폐와 동일한 가치를 보장하며, 국가의 신용에 의해 뒷받침됩니다.
- 안정성: 정부와 중앙은행의 관리 하에 있기 때문에, 민간이 발행하는 스테이블코인(예: USDT)과는 달리 법적, 제도적 안전장치가 마련되어 있습니다.

따라서, 정부가 발행한 디지털 화폐는 CBDC가 맞습니다.`,
  },
  {
    id: 4,
    question: '이더리움에서 스마트 컨트랙트(Smart Contract)가 사용되는 이유는 무엇일까요?',
    options: [
      '미리 정해진 조건이 충족되면 중개자 없이 자동으로 계약을 실행할 수 있기 때문',
      '네트워크 상에서 새로운 암호화폐를 손쉽게 발행하고 거래 활성화를 도모하기 위해',
      '비트코인과 차별화된 기능을 통해 디지털 자산 시장에서 경쟁 우위를 확보하기 위해',
      '외부의 개입 없이 계약 이행 과정을 보안적으로 관리할 수 있기 때문',
    ],
    correctAnswer: '미리 정해진 조건이 충족되면 중개자 없이 자동으로 계약을 실행할 수 있기 때문',
    explanation: `스마트 컨트랙트는 프로그래밍된 조건이 충족되면 자동으로 계약의 내용을 실행하는 자가 실행형 계약입니다.

- 자동 실행: 계약 조건이 만족되면, 사람이 개입하지 않아도 코드에 따라 즉각적으로 계약이 이행됩니다.
- 중개자 불필요: 중개 기관이나 제3자의 개입 없이도 계약이 실행되어 비용과 시간을 절감할 수 있습니다.
- 투명성 및 신뢰성: 모든 거래 기록이 블록체인에 기록되므로, 계약 이행 과정이 투명하게 관리됩니다.

이러한 이유 때문에 이더리움에서는 스마트 컨트랙트를 활용하여 다양한 탈중앙화 애플리케이션(DApp)을 구현하고 있습니다.`,
  },
  {
    id: 5,
    question: '영지식 증명(Zero-Knowledge Proof)의 핵심 개념은 무엇일까요?',
    options: [
      '네트워크 상의 모든 거래 내역을 암호화해 완전한 투명성을 보장한다.',
      '모든 트랜잭션을 익명으로 처리하는 기술이다.',
      '분산화된 시스템의 무결성과 보안을 유지시킨다.',
      '정보를 공개하지 않고도 특정 내용을 증명할 수 있다.',
    ],
    correctAnswer: '정보를 공개하지 않고도 특정 내용을 증명할 수 있다.',
    explanation: `영지식 증명은 한 쪽이 특정 정보를 알고 있다는 사실을 상대방에게 증명할 때, 그 정보 자체를 공개하지 않고도 진위를 확인시킬 수 있는 암호학적 방법입니다.

- 프라이버시 보호: 민감한 정보나 데이터를 공개하지 않고도, 특정 조건이나 사실이 참임을 증명할 수 있습니다.
- 보안 강화: 데이터의 노출 없이 증명이 가능하기 때문에, 정보 유출 위험이 줄어듭니다.

이러한 특징 때문에 영지식 증명은 개인정보 보호가 중요한 분야나, 블록체인에서 프라이버시를 강화하는 용도로 사용됩니다.`,
  },
];

export type RecommendationType = 'nft' | 'coin' | 'chat' | 'poll' | 'information';

export const getRecommendations = (correctCount: number): { level: string; image: string; recommendations: RecommendationType[] } => {
  if (correctCount >= 4) {
    return {
      level: '숙련자',
      image: '/images/landing/advanced.png',
      recommendations: ['nft', 'coin', 'information'],
    };
  } else if (correctCount >= 2) {
    return {
      level: '중급자',
      image: '/images/landing/intermediate.png',
      recommendations: ['nft', 'coin', 'poll'],
    };
  } else {
    return {
      level: '초보자',
      image: '/images/landing/beginner.png',
      recommendations: ['nft', 'coin', 'chat'],
    };
  }
};

export const contentMap = {
  nft: {
    title: '나만의 NFT 생성',
    description: '클릭만으로 간단하게 NFT를 생성해보세요!',
    image: '/images/quiz/nft.png',
    url: '/nft',
  },
  coin: {
    title: '나만의 코인 생성',
    description: '클릭만으로 간단하게 코인을 생성해보세요!',
    image: '/images/quiz/coin.png',
    url: '/coin',
  },
  chat: {
    title: '채팅으로 기초부터 블록체인 학습',
    description: '수준에 맞게 추천되는 질문으로 자연스럽게 블록체인을 배워보세요!',
    image: '/images/quiz/chat.png',
    url: '/chat',
  },
  poll: {
    title: '투표 참여하기',
    description: '블록체인 관련 투표를 진행하고 결과를 확인해 보세요.',
    image: '/images/quiz/poll.png',
    url: '/poll',
  },
  information: {
    title: '블록체인 소식 알아보기',
    description: '전세계의 블록체인 소식을 한 눈에 확인해 보세요.',
    image: '/images/quiz/information.png',
    url: '/information',
  },
};
