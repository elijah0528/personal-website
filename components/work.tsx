import { ArrowUpRight01Icon } from "hugeicons-react";

export default function WorkItem({
  title,
  year,
  description,
  link,
}: {
  title: string;
  year: string;
  description: string;
  link: string;
}) {
  return (
    <div className="flex w-128 items-start justify-between gap-x-4">
      <div className="flex w-96 flex-col items-start">
        <a
          href={link}
          target="_blank"
          className="flex items-center text-white transition-all hover:text-zinc-400"
        >
          {title}
          <ArrowUpRight01Icon size={20} className="ml-1" />
        </a>
        <div>{year}</div>
      </div>
      <div className="flex w-full">{description}</div>    
    </div>
  );
}
