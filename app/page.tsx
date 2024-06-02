
"use client";
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
import { animate, motion } from "framer-motion"

// Define your animation variants
const containerVariants = {
  hidden: { opacity: 0, y: '-2.5vh' },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'easeInOut',
      duration: 1.75
    }
  }
};

const childVariants = {
  hidden: { opacity: 0 },
  show: { 
    opacity: 1,
    transition: {
      duration: 0.5,
      type: 'easeInOut',
      staggerChildren: 0.5
    }
    
  }
};

export default function Home() {
  return (
    <motion.main
      className="flex min-h-screen w-screen justify-center px-6 py-48"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.div
        className="w-full max-w-screen-md text-lg leading-snug text-zinc-500"
        variants={childVariants}
      >
        <motion.div
        variants={childVariants}
        >
          {/* Name + title */}
          <div className="text-xl text-white">Elijah Kurien</div>
          <div className="text-md">Building AI Agents and Robotics</div>
          <div className="text-md">
            Software Engineering @ University of Waterloo
          </div>

          {/* Your bio */}
          <div className="mt-8 space-y-4">
            <div className="mt-4">
            </div>
          </div>
        </motion.div>

        {/* Social media links */}
        <motion.div variants={childVariants} className="mt-8 flex w-full flex-wrap items-center text-base">
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
        </motion.div>

        {/* Work experiences */}
        <motion.div variants={childVariants} className="mt-16">
          <div className="flex items-center text-xl text-white">
            <Briefcase02Icon size={20} className="mr-2" />
            Work
          </div>
          <div className="mt-8 space-y-8 overflow-auto">
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
        </motion.div>

        {/* Projects */}
        <motion.div variants={childVariants} className="mt-24">
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
        </motion.div>

        {/* Papers */}
        <motion.div variants={childVariants} className="mt-24">
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
        </motion.div>
      </motion.div>
    </motion.main>
  );
}
