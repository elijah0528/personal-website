export interface ExperienceCardProps {
  position: string;
  company: string;
  dates: string;
  description: string[];
  link: string;
}

export interface ProjectCardProps {
  title: string;
  date: string;
  description: string;
  link: string;
}

export interface BlogCardProps {
  title: string;
  date: string;
  description: string;
  slug: string;
}