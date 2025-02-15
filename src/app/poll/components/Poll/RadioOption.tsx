import { Icon } from '@/assets/icons';
import clsx from 'clsx';

interface RadioOptionProps extends React.InputHTMLAttributes<HTMLInputElement> {
  name: string;
  value: string | number;
  label: string;
  percentage: number;
  checked: boolean;
  voted: boolean;
  isVotedByUser: boolean;
  isExpired: boolean;
  isWinner: boolean;
  isDraw: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioOption({
  name,
  value,
  label,
  percentage,
  checked,
  voted,
  isVotedByUser,
  isExpired,
  isWinner,
  isDraw,
  onChange,
  disabled,
}: RadioOptionProps) {
  return (
    <label className="block cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
        className="absolute h-0 w-0 opacity-0" // 실제 라디오 버튼 숨기기
      />
      <div className={clsx('flex flex-col', disabled && 'cursor-not-allowed')}>
        <div
          className={clsx(
            'relative flex gap-[1.6rem] rounded-[0.8rem] bg-gray-200 px-[1.6rem] py-[1.2rem]',
            checked || isVotedByUser || (isExpired && isWinner) ? 'border border-blue-500' : 'border-none'
          )}
        >
          <div
            className={`absolute inset-0 rounded-[0.8rem] ${checked || isVotedByUser || isWinner || (isExpired && isDraw) ? 'bg-blue-100' : 'bg-gray-300'} transition-all duration-300`}
            style={{ width: `${voted || isExpired ? percentage : 0}%` }}
          />
          <div className="relative flex flex-1 flex-col gap-[1.2rem]">
            <div className="flex items-center justify-between">
              <div>
                {isExpired && isVotedByUser && (
                  <span className="mb-[0.6rem] inline-flex items-center gap-[0.2rem] rounded-full bg-gray-800 p-[0.2rem_0.6rem_0.2rem_0.4rem] text-caption-1-semibold text-blue-200">
                    <Icon name="CheckCircle" className="h-[1.4rem] w-[1.4rem] text-blue-200" size={14} />
                    투표 완료
                  </span>
                )}
                <p
                  className={clsx(
                    'text-body-1-medium',
                    checked || isVotedByUser || (isExpired && isWinner) ? 'text-blue-600' : 'text-gray-800'
                  )}
                >
                  {label}
                </p>
              </div>
              {disabled && (
                <span
                  className={clsx(
                    'text-body-2-semibold',
                    checked || isVotedByUser || (isExpired && isWinner) ? 'text-blue-500' : 'text-gray-600'
                  )}
                >
                  {percentage}%
                </span>
              )}
              {!disabled && (
                <div className="p-[0.2rem]">
                  <div
                    className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border-2 border-gray-500`}
                  >
                    {checked && <div className="h-[1rem] w-[1rem] rounded-full bg-blue-400" />}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
