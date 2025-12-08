import ExperienceCard from "@/components/ExperienceCard";
import ProjectCard from "@/components/ProjectCard";
import BlogCard from "@/components/BlogCard";
import { experienceData, projectData, blogData, interpPaperData } from "@/lib/data";

export default function Home() {
  return (
    <main className="flex w-full min-h-screen flex-col items-center font-sans px-8">
      <div className="z-50 flex w-full flex-col items-start gap-8 px-4 pt-32 pb-48 text-md  md:w-3/4 lg:w-1/2">
      <section className="flex flex-col gap-8">
          <h2 className="font-bold">Interpretability</h2>

          <p>
            Three years ago, I was doing neuroscience and epigenetics research at the University of Toronto.
            When I pivoted into software, I was instantly drawn towards building interpretable models because it was analagous to how we study the brain.
            I've curated a list of my favourite blogs on mechanistic interpretability.
          </p>
        </section>
        <section className="flex w-full flex-col gap-8">
          <div className="flex w-full flex-col gap-2">
            {interpPaperData.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </section>

      </div>
    </main>
  );
}