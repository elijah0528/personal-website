import { ArrowUpRight01Icon } from "hugeicons-react";

export default function PaperItem({
  title,
  year,
  link,
}: {
  title: string;
  year: string;
  link: string;
}) {
  return (
    <div className="flex w-full items-start justify-between">
      <a
        href={link}
        target="_blank"
        className="text-white transition-all hover:text-zinc-400"
      >
        {title}
        <ArrowUpRight01Icon size={20} className="ml-1 inline-block" />
      </a>
      <div className="w-96 text-right">{year}</div>
    </div>
  );
}
