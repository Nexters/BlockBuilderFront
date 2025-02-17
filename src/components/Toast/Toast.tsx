import { Icon } from '@/assets/icons';

interface ToastProps {
  message: string;
  isVisible: boolean;
}

export default function Toast({ message, isVisible }: ToastProps) {
  if (!isVisible) return null;

  return (
    <div className="animate-fade-in-up fixed bottom-8 z-50 flex -translate-x-1/2 items-center gap-[0.8rem] rounded-[8px] bg-gray-900 p-[1.4rem_2.4rem_1.4rem_2rem] opacity-80 shadow-emphasize backdrop-blur-[5px] transition-all duration-300 ease-in-out mobile:left-1/2 mobile:w-[33.5rem] tablet:left-[calc(50%-3rem)] tablet:w-[50.8rem] desktop:left-[calc(50%+13rem)] desktop:w-[50.8rem]">
      <Icon name="CheckCircle" className="h-[1.8rem] w-[1.8rem] text-gray-100" size={18} />
      <p className="text-left text-body-2-medium text-gray-100">{message}</p>
    </div>
  );
}
