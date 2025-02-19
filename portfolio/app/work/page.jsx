"use client";

import { motion } from "framer-motion";
import React, { useState } from "react";

import { Swiper, SwiperSlide, SwiperState } from "swiper/react";
import "swiper/css";

import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

import Link from "next/link";
import Image from "next/image";

import WorkSliderBtns from "@/components/ui/workSliderBtns";

const projects = [
  {
    num: "01",
    category: "FrontEnd",
    title: "Nike Clone",
    description:
      "This is a practice project for honing my Tailwind CSS skills, built using React with Vite ⚡ for a fast and efficient development experience. The project focuses on creating a responsive and visually appealing homepage inspired by Nike's iconic design.",
    stack: [{ name: "Tailwind.css" }, { name: "ReactJs" }],
    image: "/assets/work/thumb1.png",
    live: "https://nike-ro0spfzw1-abderrahmen-malouches-projects.vercel.app",
    github: "https://github.com/Abderrahmen-Malouche/Nike",
  },
  {
    num: "02",
    category: "FullStack",
    title: "Netflix Clone",
    description:
      "This is a practice project for mastering state management with Redux and implementing Firebase Authentication. Built using React with Vite ⚡, it leverages the TMDB API to display trending movies and TV shows, with a responsive design styled using Tailwind CSS.",
    stack: [
      { name: "Tailwind.css" },
      { name: "ReactJs" },
      { name: "Redux" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb2.png",
    live: "https://netflix-clone-one-omega-71.vercel.app",
    github: "https://github.com/Abderrahmen-Malouche/netflix-clone",
  },
  {
    num: "03",
    category: "FullStack",
    title: "RealTime Chat App",
    description:
      "A responsive web-based real-time chat application built with React, Firebase, and Vanilla CSS. It features real-time messaging, user authentication, and a clean, intuitive design. Users can securely exchange messages with a smooth and responsive UI , can also send emojies and tailored for desktops and laptops. Perfectly crafted to demonstrate skills in frontend development and Firebase integration.",
    stack: [
      { name: "Vanilla Css" },
      { name: "ReactJs" },
      { name: "Redux" },
      { name: "Firebase" },
    ],
    image: "/assets/work/thumb3.png",
    live: "https://real-time-chat-app-blue-delta.vercel.app/",
    github: "https://github.com/Abderrahmen-Malouche/RealTime-Chat-App",
  },
  {
    num: "04",
    category: "FullStack",
    title: "E-commerce Website",
    description:
      "A sleek and responsive clothing e-commerce website built with React, Tailwind CSS, Express.js, and MongoDB. It features a modern UI, seamless product browsing, secure authentication, and a smooth shopping experience tailored for desktops and laptops.",
    stack: [
      { name: "TailwindCss" },
      { name: "ReactJs" },
      { name: "ExpressJs" },
      { name: "MongoDB" },
    ],
    image: "/assets/work/thumb4.png",
    live: "https://forever-frontend-eight-wheat.vercel.app/",
    github: "https://https://github.com/Abderrahmen-Malouche/e-commerce",
  }
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);
  const handleSlideChange = (swiper) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project catagory */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duraiton-500 capitalize">
                {project.category} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name} {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* Live Porject Button */}
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                {/* github Project Button */}
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github Repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-ful xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      <div className="relative w-full h-full">
                        <Image
                          src={project.image}
                          fill
                          className="object-cover"
                          alt=""
                        ></Image>
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* buttons */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Work;
