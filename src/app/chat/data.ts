export enum Level {
  BEGINNER = "초급",
  INTERMEDIATE = "중급",
  ADVANCED = "고급",
}

export enum QuestionType {
  CONCEPT = "개념",
  EXAMPLE = "예제",
  QUESTION = "질문",
}

export const questions = [
  {
    id: 1,
    type: QuestionType.CONCEPT,
    question: "블록체인이란 무엇인가요?",
  },
  {
    id: 2,
    type: QuestionType.EXAMPLE,
    question: "이더리움의 블록체인 구조 예시를 알려줘.",
  },
  {
    id: 3,
    type: QuestionType.QUESTION,
    question: "블록체인은 어떤 문제를 해결하려고 만들어졌어?",
  },
  {
    id: 4,
    type: QuestionType.CONCEPT,
    question: "블록체인이 무엇인가요?",
  },
  {
    id: 5,
    type: QuestionType.QUESTION,
    question: "블록체인은 어떤 문제를 해결하려고 만들어졌어?",
  },
];

export type ChatType = {
  id: number;
  text: string;
  isUser: boolean;
};
