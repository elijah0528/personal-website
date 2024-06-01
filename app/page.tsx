import Button from "@/components/button";
import PaperItem from "@/components/paper";
import WorkItem from "@/components/work";
import data from "@/lib/data";
import {
  ArrowUpRight01Icon,
  Briefcase02Icon,
  CodeFolderIcon,
  GoogleDocIcon,
} from "hugeicons-react";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen justify-center px-12 py-48">
      <div className="w-full max-w-screen-sm text-lg leading-snug text-zinc-500">
        <div>
          {/* Name + title */}
          <div className="text-xl text-white">Elijah Kurien</div>
          <div className="text-xl">Building AI Agents and Robotics</div>

          {/* Your bio */}
          <div className="mt-8 space-y-4">
            <div className="">
              Ad aute Lorem ut sint deserunt aliqua laborum et amet veniam.
              Ipsum in est sit commodo nisi fugiat id laboris consequat sint
              aliqua. Amet labore est ullamco mollit consequat duis ad eu
              cupidatat ad.
            </div>
            <div className="mt-4">
              Veniam anim veniam cupidatat Lorem reprehenderit.
            </div>
          </div>
        </div>

        {/* Social media links */}
        <div className="mt-8 flex w-full flex-wrap items-center text-base">
          <a href="https://twitter.com/elijahkurien" target="_blank">
            <Button
              className="mb-2 mr-2"
              icon={<ArrowUpRight01Icon size={20} className="ml-1" />}
            >
              Twitter
            </Button>
          </a>
          <a href="https://linkedin.com/in/elijahkurien" target="_blank">
            <Button
              className="mb-2 mr-2"
              icon={<ArrowUpRight01Icon size={20} className="ml-1" />}
            >
              LinkedIn
            </Button>
          </a>
          <a href="https://github.com/elijah0528" target="_blank">
            <Button
              className="mb-2 mr-2"
              icon={<ArrowUpRight01Icon size={20} className="ml-1" />}
            >
              GitHub
            </Button>
          </a>
          <a href="mailto:elijahkurien@gmail.com">
            <Button
              className="mb-2 mr-2"
              icon={<ArrowUpRight01Icon size={20} className="ml-1" />}
            >
              Email
            </Button>
          </a>
        </div>

        {/* Work experiences */}
        <div className="mt-24">
          <div className="flex items-center text-xl text-white">
            <Briefcase02Icon size={20} className="mr-2" />
            Work
          </div>
          <div className="mt-8 space-y-8">
            {data.work.map((work) => (
              <WorkItem
                key={work.title}
                title={work.title}
                year={work.year}
                description={work.description}
                link={work.link}
              />
            ))}
          </div>
        </div>

        {/* Projects */}
        <div className="mt-24">
          <div className="flex items-center text-xl text-white">
            <CodeFolderIcon size={20} className="mr-2" />
            Projects
          </div>
          <div className="mt-8 space-y-8">
            {data.projects.map((project) => (
              <WorkItem
                key={project.title}
                title={project.title}
                year={project.year}
                description={project.description}
                link={project.link}
              />
            ))}
          </div>
        </div>

        {/* Papers */}
        <div className="mt-24">
          <div className="flex items-center text-xl text-white">
            <GoogleDocIcon size={20} className="mr-2" />
            Peer-Reviewed Papers
          </div>
          <div className="mt-8 space-y-8">
            {data.papers.map((paper) => (
              <PaperItem
                key={paper.title}
                title={paper.title}
                year={paper.year}
                link={paper.link}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
