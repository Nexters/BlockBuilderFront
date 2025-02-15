import { Icon } from '@/assets/icons';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  if (!isVisible) return null;

  return (
    <div className="gap-[0.8rem] bg-toast fixed bottom-8 left-1/2 z-50 flex w-[50.8rem] -translate-x-1/2 items-center rounded-[8px] p-[1.4rem_2.4rem_1.4rem_2rem] shadow-emphasize backdrop-blur-[5px] transition-all duration-300 ease-in-out">
      <Icon name="CheckCircle" className="h-[1.8rem] w-[1.8rem] text-gray-100" size={18} />
      <p className="text-left text-body-2-medium text-gray-100">{message}</p>
    </div>
  );
}
