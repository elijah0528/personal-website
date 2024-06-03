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
  LeftToRightListBulletIcon,
  CheckmarkSquare01Icon,
  NewsIcon,
} from "hugeicons-react";
import { animate, motion } from "framer-motion"
import Image from "next/image";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
  } from "@/components/ui/carousel"

import Link from "next/link";


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

export default function Aaru() {
  return (
    <motion.main
      className="flex min-h-screen w-screen justify-center px-6 pb-48"
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
          <div className="flex justify-start text-md text-white pt-24">
            <Link href="/"
                className="flex items-center text-white transition-all hover:text-zinc-400"
                    >
            Back
            <ArrowUpRight01Icon size={20} className="ml-1" />
          </Link>
          </div>
          <div className="text-xl mt-8 text-white">
            <Link href="https://www.aaruaaru.com/"
                className="flex items-center text-white transition-all hover:text-zinc-400"
                    >
            Aaru
            <ArrowUpRight01Icon size={20} className="ml-1" />
          </Link>
          </div>
          <div className="text-md">Founding Engineer</div>

        </motion.div>

        {/* Social media links 
        <motion.div variants={childVariants} className="grid grid-cols-3 mt-8 w-full items-center justify-center text-base">
        <div className="w-64 h-64 relative rounded-2xl overflow-hidden p-2">
            <Image src={computeboard} alt="Compute Board" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-64 h-64 relative rounded-3xl overflow-hidden p-2">
            <Image src={sensorboard} alt="Sensor Board" className="w-full h-full rounded-2xl" />
        </div>
        <div className="w-64 h-64 relative rounded-lg overflow-hidden p-2">
            <Image src={confusionmatrix} alt="Confusion Matrix" className="w-full h-full rounded-2xl" />
        </div>
        </motion.div>
        */}

        {/* Key Metrics */}
        <motion.div variants={childVariants} className="mt-8">
          <div className="flex items-center text-xl text-white">
            <LeftToRightListBulletIcon size={20} className="mr-2" />
            Key Metrics
          </div>
          <div className="mt-8 pl-4 space-y-8 overflow-auto">
            <ul className="list-disc list-inside">
                <li>
                    Built multi-agent simulations based on user demographics to simulate buying decisions
                </li>
                <li>
                    Helped raise $500,000 in 1.5 months and worked with various Fortune 500 Companies [Unnamed due to NDA]
                </li>
                <li>
                    Key contribution was building a novel agent-driven algorithm for a $20+ billion dollar company [Unnamed due to NDA]
                </li>
            </ul>
          </div>
        </motion.div>

        {/* Skills */}
        <motion.div variants={childVariants} className="mt-8">
          <div className="flex items-center text-xl text-white">
            <CheckmarkSquare01Icon size={20} className="mr-2" />
            Skills
          </div>
          <div className="mt-8 pl-4 space-y-8 overflow-auto">
            <ul className="grid grid-cols-3 list-disc list-inside">
                <li>
                    LLMs
                </li>
                <li>
                    Statistics
                </li>
                <li>
                    Research
                </li>
            </ul>
          </div>
        </motion.div>
          {/* Papers */}
          <motion.div variants={childVariants} className="mt-8">
          <div className="flex items-center text-xl text-white">
            <NewsIcon size={20} className="mr-2" />
            Interesting Papers
          </div>
          <div className="mt-8 pl-4 space-y-4 overflow-auto">
            <div>
              If you&apos;re interested in learning more about my work here, check out these papers I read during my time
            </div>
            <div className=" list-decimal">
              <li>
                <Link
                href="https://arxiv.org/abs/2308.08155"
                target="_blank"
                className="transition-all hover:text-white"
                >
                  AutoGen: Enabling Next-Gen LLM Applications via Multi-Agent Conversation
                </Link>
              </li>
              <li>
                <Link
                href="https://arxiv.org/html/2312.15524v1"
                target="_blank"
                className="transition-all hover:text-white"
                >
                  The Challenge of Using LLMs to Simulate Human Behavior: A Causal Inference Perspective
                </Link>
              </li>
              <li>
                <Link
                href="https://arxiv.org/html/2312.15524v1"
                target="_blank"
                className="transition-all hover:text-white"
                >
                  The Challenge of Using LLMs to Simulate Human Behavior: A Causal Inference Perspective
                </Link>
              </li>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}