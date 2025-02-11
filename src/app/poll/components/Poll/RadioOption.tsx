import clsx from 'clsx';

interface RadioOptionProps {
  name: string;
  value: string;
  label: string;
  percentage: number;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function RadioOption({ name, value, label, percentage, checked, onChange }: RadioOptionProps) {
  return (
    <label className="block cursor-pointer">
      <input
        type="radio"
        name={name}
        value={value}
        checked={checked}
        onChange={onChange}
        className="absolute h-0 w-0 opacity-0" // 실제 라디오 버튼 숨기기
      />

      <div className="flex flex-col">
        <div className="flex gap-[1.6rem]">
          <div className="p-[0.2rem]">
            <div className={`flex h-[2rem] w-[2rem] items-center justify-center rounded-full border-2 border-gray-500`}>
              {checked && <div className="h-[1rem] w-[1rem] rounded-full bg-blue-400" />}
            </div>
          </div>
          <div className="flex flex-1 flex-col gap-[1.2rem]">
            <div className="flex justify-between">
              <span className="text-body-1-medium text-gray-900">{label}</span>
              <span className={clsx('text-body-2-semibold', checked ? 'text-blue-400' : 'text-gray-600')}>
                {percentage}%
              </span>
            </div>
            {/* Progress Bar */}
            <div className="pl=[4rem] h-[1rem] w-full rounded-full bg-gray-200">
              <div
                className={`h-full rounded-full ${checked ? 'bg-blue-400' : 'bg-gray-400'}`}
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        </div>
      </div>
    </label>
  );
}
