export default function SubmitButton({
  isDisabled,
  isVoted,
  onReceiptClick,
  onVoteClick,
}: {
  isDisabled: boolean;
  isVoted: boolean;
  onReceiptClick: () => void;
  onVoteClick: () => void;
}) {
  if (isVoted) {
    return (
      <button
        type="submit"
        className="h-[4.8rem] w-[25rem] cursor-pointer rounded-full bg-gray-900 text-body-1-semibold text-blue-100"
        onClick={onReceiptClick}
      >
        블록체인 영수증 바로가기
      </button>
    );
  }

  if (isDisabled) {
    return (
      <button
        type="submit"
        className="border-gray400 h-[4.8rem] w-[25rem] cursor-not-allowed rounded-full border bg-gray-100 text-body-1-semibold text-gray-600"
        disabled
      >
        투표할 답변을 선택해주세요
      </button>
    );
  }

  return (
    <button
      type="submit"
      className="h-[4.8rem] w-[25rem] cursor-pointer rounded-full bg-blue-400 text-body-1-semibold text-gray-100"
      onClick={onVoteClick}
    >
      투표하기
    </button>
  );
}
