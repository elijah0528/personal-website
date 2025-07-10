import ExperienceCard from "@/components/ExperienceCard";
import FancyLink from "@/components/FancyLink";
import ProjectCard from "@/components/ProjectCard";
import { experienceData, projectData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans">
      <div className="z-50 flex w-1/2 flex-col items-start gap-8 px-8 pt-32 pb-48 text-md">
        <section className="flex flex-col gap-8">
          <h2 className="font-bold">Hi, I'm Elijah.</h2>
          <p>
            I’m a Machine Learning Engineer and VC. I spend my time between San
            Francisco and Canada where I study Software Engineering at the
            University of Waterloo
          </p>
          <p>
            In the fall, I’ll be making buttons as a Member of Technical Staff at
            Yutori. I also write 25-100k angel investment cheques in seed and
            pre-seed startups and help with hiring + growth.
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
          <h1 className="text-xl font-bold text-accent-foreground">J*bs</h1>
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
      </div>
    </main>
  );
}
