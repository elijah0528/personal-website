import { ExperienceCardProps, ProjectCardProps, BlogCardProps } from "./types";
import { getAllBlogPosts } from "./mdx";

export const experienceData: ExperienceCardProps[] = [
  {
    position: "Member of Technical Staff",
    company: "Yutori",
    dates: "September 2025 - Present",
    description: [
      "Incoming Fall 2025",
    ],
    link: "https://yutori.com",
  },
  {
    position: "Software Engineering Intern",
    company: "Wispr Flow",
    dates: "Jan 2025 – April 2025",
    description: [
      "Worked on optimizing inference on the ML team for 60,000+ users",
    ],
    link: "https://wisprflow.com",
  },
  {
    position: "Engineering Intern",
    company: "General Cybernetics",
    dates: "July 2024 – August 2024",
    description: [
      "Designed incubators to convert kidney cells into dedifferentiated stem cells",
    ],
    link: "https://generalcybernetics.org",
  },
  {
    position: "Managing Partner",
    company: "Dorm Room Fund",
    dates: "Oct 2024 – Present",
    description: [
      "Leading Boston’s Dorm Room Fund team investing in student founders at the earliest stage",
    ],
    link: "https://dormroomfund.com",
  },
];


export const projectData: ProjectCardProps[] = [
  {
    title: "Shadow",
    date: "August 2025",
    description: "A background coding agent that runs on VMs allowing you to run code from anywhere asynchronously.",
    link: "https://x.com/ElijahKurien/status/1955075209720967457",
  },
  {
    title: "Hacker Fab",
    date: "Sept 2024 – Present",
    description: "Built a semiconductor chip fab in my apartment",
    link: "https://www.waterloofab.com/",
  },
  {
    title: "Skyline",
    date: "June 2024",
    description: "Simulated the entire population of LA to optimize transit routes",
    link: "https://www.humansimulation.ai/",
  },
  {
    title: "Ray Tracer",
    date: "August 2024",
    description: "Built a raytracer from scratch in Rust",
    link: "https://github.com/elijah0528/raytracer",
  },
];

export const blogData: BlogCardProps[] = getAllBlogPosts();
