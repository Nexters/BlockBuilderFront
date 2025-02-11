const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  return (
    <div className="flex h-[1.2rem] w-full rounded-full bg-gray-200">
      <div
        className="h-[1.2rem] rounded-full bg-blue-500 transition-all duration-500"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
