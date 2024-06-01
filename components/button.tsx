export default function Button({
  children,
  icon,
  className,
}: {
  children: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
}) {
  return (
    <button
      className={`flex h-9 items-center rounded-full bg-zinc-800 text-white transition-all hover:bg-zinc-700 ${
        icon ? "pl-3 pr-2" : "px-3"
      } ${className}`}
    >
      {children}
      {icon}
    </button>
  );
}
