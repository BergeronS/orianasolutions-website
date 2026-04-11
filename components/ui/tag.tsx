interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="inline-flex items-center  rounded-3.5 border-[1.4px] border-[#2222221A] px-[18.17px] py-[spacing/3]  text-[13px] lg:text-lg font-medium leading-7.75 lg:leading-10.75 tracking-[-0.45px]">
      {children}
    </div>
  );
}
