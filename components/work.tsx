"use client";
import { ArrowUpRight01Icon } from "hugeicons-react";
import Link from 'next/link';

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
}) 
{
  return (
    <div className="grid grid-cols-3 items-start justify-between gap-x-8">
      <div className="col-span-1 flex flex-col items-start overflow-wrap ">
        <Link href={`work/${title.toLowerCase()}`}
              className="flex items-center text-white transition-all hover:text-zinc-400"
                  >
          {title}
          <ArrowUpRight01Icon size={20} className="ml-1" />
        </Link>
        <div>{year}</div>
      </div>
      <div className="col-span-2">
        {description}
      </div>
    </div>
  );
}
