export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-[68.4rem] py-[6.4rem] mobile:mx-[2rem] tablet:mx-[4rem] desktop:mx-auto">{children}</div>
  );
}
