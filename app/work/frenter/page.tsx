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
import computeboard from './computeboard.png'
import confusionmatrix from './confusionmatrix.png'
import sensorboard from './sensorboard.png'


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

export default function Frenter() {
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
            <Link href="https://www.frenter.com/"
                className="flex items-center text-white transition-all hover:text-zinc-400"
                    >
            Frenter
            <ArrowUpRight01Icon size={20} className="ml-1" />
          </Link>
          </div>
          <div className="text-md">Software Engineering Intern</div>

        </motion.div>

        {/* Social media links */}
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

        {/* Key Metrics */}
        <motion.div variants={childVariants} className="mt-8">
          <div className="flex items-center text-xl text-white">
            <LeftToRightListBulletIcon size={20} className="mr-2" />
            Key Metrics
          </div>
          <div className="mt-8 pl-4 space-y-8 overflow-auto">
            <ul className="list-disc list-inside">
                <li>
                    Led the development of a novel sensor to predict engine health in heavy machinery
                </li>
                <li>
                    Built an end-to-end product from the hardware infrastructure to the machine learning models
                </li>
                <li>
                    Submitted a provisional patent for the technology
                </li>
                <li>
                    Piloted in construction vehicles around the world
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
                    Python
                </li>
                <li>
                    CUDA Optimization
                </li>
                <li>
                    Postgres
                </li>
                <li>
                    PCB Design
                </li>
                <li>
                    Digital Signal Processing
                </li>
                <li>
                    Go
                </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </motion.main>
  );
}