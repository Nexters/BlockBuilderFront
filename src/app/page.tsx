import { redirect } from "next/navigation";

export default function Home() {
  redirect('/chat');
  
  return (
    <div>
      <div className="flex">
        <div className="flex-1">
          <p className="text-headline-1-bold text-blue-900">text-headline-1-bold</p>
          <p className="text-headline-1-regular text-blue-800">text-headline-1-regular</p>
          <p className="text-headline-2-bold text-blue-700">text-headline-2-bold</p>
          <p className="text-headline-2-regular text-blue-600">text-headline-2-regular</p>
          <p className="text-headline-3-bold text-blue-500">text-headline-3-bold</p>
          <p className="text-headline-3-regular text-blue-400">text-headline-3-regular</p>
          <p className="text-headline-4-bold text-blue-300">text-headline-4-bold</p>
          <p className="text-headline-4-semibold text-blue-200">text-headline-4-semibold</p>
          <p className="text-headline-4-medium text-blue-100">text-headline-4-medium</p>

          <p className="text-title-1-bold text-yellow-900">text-title-1-bold</p>
          <p className="text-title-1-semibold text-yellow-800">text-title-1-semibold</p>
          <p className="text-title-1-medium text-yellow-700">text-title-1-medium</p>
          <p className="text-title-1-regular text-yellow-600">text-title-1-regular</p>
          <p className="text-title-2-semibold text-yellow-500">text-title-2-semibold</p>
          <p className="text-title-2-medium text-yellow-400">text-title-2-medium</p>
          <p className="text-title-2-regular text-yellow-300">text-title-2-regular</p>
          <p className="text-title-3-semibold text-yellow-200">text-title-3-semibold</p>
          <p className="text-title-3-medium text-yellow-100">text-title-3-medium</p>

          <p className="text-body-1-semibold text-gray-900">text-body-1-semibold</p>
          <p className="text-body-1-medium text-gray-800">text-body-1-medium</p>
          <p className="text-body-1-regular text-gray-700">text-body-1-regular</p>
          <p className="text-body-2-semibold text-gray-600">text-body-2-semibold</p>
          <p className="text-body-2-medium text-gray-500">text-body-2-medium</p>
          <p className="text-body-2-regular text-gray-400">text-body-2-regular</p>
          <p className="text-body-3-semibold text-gray-300">text-body-3-semibold</p>
          <p className="text-body-3-medium text-gray-200">text-body-3-medium</p>
          <p className="text-body-3-regular text-gray-100">text-body-3-regular</p>

          <p className="text-caption-1-semibold text-system-red">text-caption-1-semibold</p>
          <p className="text-caption-1-regular text-system-green">text-caption-1-regular</p>
        </div>

        <div className="flex-1 flex gap-8">
          <div className="w-[10rem] h-[10rem] shadow-normal flex items-center justify-center">shadow-normal</div>
          <div className="w-[10rem] h-[10rem] shadow-emphasize flex items-center justify-center">shadow-emphasize</div>
        </div>
      </div>
    </div>
  );
}
