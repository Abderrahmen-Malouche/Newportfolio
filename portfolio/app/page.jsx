"use client"; 

import Socials from "@/components/Socials";
import Stats from "@/components/Stats";
import Photo from "@/components/ui/Photo";
import { Button } from "@/components/ui/button";
import { use } from "react";
import { FiDownload } from "react-icons/fi";
const Home = () => {
  const handleDownload = () => {
    alert("The CV has been downloaded!");
  };
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          {/* text */}
          <div className="text-center xl:text-left order-2 xl:order-none ">
            <span className="text-xl">Software Developer</span>
            <h1 className="h1">
              Hello I'm <br />
              <span className="text-accent">Abderrahmen Malouche</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting elegant digital Experiences and I am
              proficient in various programming languages and technologies.
            </p>
            {/* buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-8">
              <Button
                variant="outline"
                size="lg"
                className="uppercase flex items-center gap-2"
              >
                <a
                  href="./assets/Abderrahmen_Malouche_CV.pdf"
                  download
                  className="uppercase flex items-center gap-2  px-4 py-2 rounded-lg "
                  onClick={handleDownload}
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </a>
              </Button>
              <div className="mb-8 xl:mb-0">
                <Socials
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/*  photo*/}
          <div className="order-1 xl:order-none mb-8 xl:mb-0 ">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
};

export default Home;
