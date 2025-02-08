export default function RecentSearchKeyword() {
  return (
    <>
      <h3 className="text-body-2-medium text-gray-600 p-[1.2rem]">최근 검색어</h3>
      <ul className="flex flex-col gap-[0.4rem]">
        {[
          '블록체인',
          '이더리움 백서 주요 내용은 무엇인가요?',
          '블록체인은 어떤 문제를 해결하려고 만들어졌어?',
          '새로운 블록체인 프로토콜의 특징은?',
          '이더리움 백서 주요 내용은 무엇인가요?',
        ].map((text, index) => (
          <li key={index} className="text-body-2-regular text-gray-900 py-[0.6rem] px-[1.2rem] truncate cursor-pointer">
            {text}
          </li>
        ))}
      </ul>
    </>
  );
}
