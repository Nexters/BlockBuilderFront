export enum Level {
  BEGINNER = "beginner",
  INTERMEDIATE = "intermediate",
  ADVANCED = "advanced",
}

export const LevelMap = {
  [Level.BEGINNER]: "초급",
  [Level.INTERMEDIATE]: "중급",
  [Level.ADVANCED]: "고급",
};

export type Question = {
  id: number;
  question: string;
  category_id: keyof typeof QuestionCategoryMap;
  category_name: QuestionCategory;
};

export type RecommendQuestion = Question & {
  level: Level;
};

export type Questions = {
  level: Level;
  questions: Question[];
}[];

export const QuestionCategoryMap = {
  0: "전체",
  1: "개념 정리",
  2: "트렌드",
  3: "네트워크",
  4: "백서요약",
  5: "보안과 최적화",
  6: "코드 예제",
  7: "실제 응용",
} as const;

export type QuestionCategory = (typeof QuestionCategoryMap)[keyof typeof QuestionCategoryMap];

export type ChatType = {
  id: number;
  text: string;
  isUser: boolean;
};
