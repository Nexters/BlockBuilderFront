import { DrawerDialog } from '@/components/ResponsiveContainer/common/DrawerDialog';

const Explanation = () => {
  return (
    <DrawerDialog
      trigger={
        <button className="rounded-full bg-blue-500 px-[1.6rem] py-[0.6rem] text-body-2-semibold text-white">
          해설 보기
        </button>
      }
      title="문제와 해설"
      description="풀이 결과와 해설을 확인해보세요"
    >
      <div>
        <p>해설</p>
      </div>
    </DrawerDialog>
  );
};

export default Explanation;
