// param : isoDate : 2025-01-16T15:00:01.000Z
export const formatRelativeTime = (isoDate: string) => {
  const date = new Date(isoDate);
  const now = new Date();

  if (isNaN(date.getTime())) {
    throw new Error("유효하지 않은 날짜 형식입니다.");
  }

  const diffInMs = now.getTime() - date.getTime();
  const diffInSeconds = Math.floor(diffInMs / 1000);
  const diffInMinutes = Math.floor(diffInSeconds / 60);
  const diffInHours = Math.floor(diffInMinutes / 60);
  const diffInDays = Math.floor(diffInHours / 24);

  const yearDiff = now.getFullYear() - date.getFullYear();
  const monthDiff = now.getMonth() - date.getMonth();
  const diffInMonths = yearDiff * 12 + monthDiff;
  const diffInWeeks = Math.floor(diffInDays / 7);

  if (diffInSeconds < 60) return "방금 전";
  if (diffInMinutes < 60) return `${diffInMinutes}분 전`;
  if (diffInHours < 24) return `${diffInHours}시간 전`;

  if (diffInDays < 7) return `${diffInDays}일 전`;
  if (diffInDays < 30) return `${diffInWeeks}주 전`;
  if (diffInMonths < 12) return `${diffInMonths}달 전`;
  return `${Math.floor(diffInMonths / 12)}년 전`;
};
