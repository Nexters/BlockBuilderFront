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
  },
  {
    id: 2,
    question: '다음 중 블록체인 기술이 가장 적절하게 적용될 수 있는 분야가 아닌 것은 무엇일까요?',
    options: ['디지털 신원 인증', '분산 금융(DeFi)', '컴퓨터 그래픽 렌더링', '암호화폐 토큰 발행'],
    correctAnswer: '컴퓨터 그래픽 렌더링',
  },
  {
    id: 3,
    question: '다음 중 정부가 발행하고 법정 화폐와 동일한 가치를 가지는 디지털 화폐는 무엇일까요?',
    options: ['스테이블코인', 'CBDC', 'USDT', '디지털 원화'],
    correctAnswer: 'CBDC',
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
  },
];

export type RecommendationType = 'nft' | 'coin' | 'chat' | 'poll' | 'information';

export const getRecommendations = (correctCount: number): { level: string; recommendations: RecommendationType[] } => {
  if (correctCount >= 4) {
    return {
      level: '숙련자',
      recommendations: ['chat', 'poll', 'information'],
    };
  } else if (correctCount >= 2) {
    return {
      level: '중급자',
      recommendations: ['nft', 'coin', 'chat'],
    };
  } else {
    return {
      level: '초보자',
      recommendations: ['nft', 'coin', 'poll'],
    };
  }
};

export const contentMap = {
  nft: {
    title: '나만의 NFT 만들기',
    description: 'NFT를 만들어 블록체인 세계에 소개해 보세요.',
    image: '/images/quiz/nft.png',
    url: '/nft',
  },
  coin: {
    title: '나만의 코인 만들기',
    description: '코인을 만들어 블록체인 세계에 소개해 보세요.',
    image: '/images/quiz/coin.png',
    url: '/coin',
  },
  chat: {
    title: '블록챗과 대화하기',
    description: '블록체인에 대해 물어보고 답해 보세요.',
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
    description: '블록체인 관련 소식을 확인해 보세요.',
    image: '/images/quiz/information.png',
    url: '/information',
  },
};