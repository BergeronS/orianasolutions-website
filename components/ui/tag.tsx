interface TagProps {
  children: string;
}

export default function Tag({ children }: TagProps) {
  return (
    <div className="inline-flex items-center rounded-xl border border-black/10 px-4.5 py-1 text-base 3xl:text-lg font-medium leading-8 lg:leading-10 tracking-tight">
      {children}
    </div>
  );
}
