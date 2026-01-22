import ExperienceCard from "@/components/ExperienceCard";
import FancyLink from "@/components/FancyLink";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { experienceData, projectData, blogData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md  md:w-3/4 lg:w-1/2">
        <section className="flex flex-col gap-8">
          <h2 className="font-bold">Hi, I&apos;m Elijah.</h2>
          <p>
            I&apos;m a Software Engineering at Cursor. I enjoy building tasteful products and distributed systems. 
            
            <br />
            <br />
            I previously studied Software Engineering at the University of Waterloo.

          </p>
          <div className="flex flex-wrap gap-x-4 gap-y-2">
            <FancyLink
              href="https://github.com/elijah0528"
              className="text-accent-foreground/80"
            >
              GitHub
            </FancyLink>
            <FancyLink
              href="https://www.linkedin.com/in/ElijahKurien"
              className="text-accent-foreground/80"
            >
              LinkedIn
            </FancyLink>
            <FancyLink
              href="https://x.com/ElijahKurien"
              className="text-accent-foreground/80"
            >
              Twitter
            </FancyLink>
            <FancyLink
              href="mailto:elijahkurien05@gmail.com"
              className="text-accent-foreground/80"
            >
              Email
            </FancyLink>
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Work</h1>
          <div className="flex w-full flex-col gap-2">
            {experienceData.map((item, index) => (
              <ExperienceCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Projects</h1>
          <div className="flex w-full flex-col gap-2">
            {projectData.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </section>

        <section className="flex w-full flex-col gap-8">
          <h1 className="text-xl font-bold text-accent-foreground">Blog</h1>
          <div className="flex w-full flex-col gap-2">
            {blogData.map((item, index) => (
              <BlogCard key={index} {...item} />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}
