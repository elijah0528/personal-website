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
    <div className="grid grid-cols-3 items-start justify-between gap-x-8">
      <div className="col-span-1 flex w-96 flex-col items-start">
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
      <div className="col-span-2">
        {description}
      </div>
    </div>
  );
}
