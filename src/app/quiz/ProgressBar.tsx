const ProgressBar = ({ current, total }: { current: number; total: number }) => {
  return (
    <div className="flex h-[1.4rem] w-full rounded-full bg-gray-300">
      <div
        className="h-[1.4rem] rounded-full bg-blue-400 transition-all duration-500"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  );
};

export default ProgressBar;
