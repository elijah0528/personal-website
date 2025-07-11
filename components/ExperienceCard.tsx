import { ExperienceCardProps } from "@/lib/types";
import Link from "next/link";
export default function ExperienceCard({ position, company, dates, description, link }: ExperienceCardProps) {
  return (
    <Link href={link} className="relative w-full rounded-lg p-4 transition-all duration-150 ease-in-out group z-50 backdrop-blur-md">
      <div className="absolute inset-0 bg-gradient-to-r from-[#F2F2F2] to-[#D9D9D9] opacity-0 group-hover:opacity-50 transition-opacity duration-150 ease-in-out rounded-lg backdrop-blur-md"></div>
      <div className="relative flex flex-col items-start justify-start gap-2 text-md">
        <h2 className="font-bold text-accent-foreground">{position} @ {company}</h2>
        <p className="font-medium text-muted-foreground">{dates}</p>
        {description.map((item, index) => (
          <p key={index} className="font-medium text-accent-foreground">{item}</p>
        ))}
      </div>
    </Link>
  );
}