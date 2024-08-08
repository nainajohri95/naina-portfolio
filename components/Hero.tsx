import React from 'react';
import Image from 'next/image';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { IoMdDownload } from 'react-icons/io';

const Hero = () => {
  return (
    <div className="pb-20 pt-10">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>

      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>

      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

          <div className="flex flex-col-reverse md:flex-row items-center justify-center md:justify-between w-full mb-8">

          <TextGenerateEffect 
            className='text-center text-[40px] md:text-3xl lg:text-5xl'
            words="Hi 👋🏼, I'm Naina Johri"
          />
            
            <div className='flex justify-start'>
              <div className="w-48 h-48 md:w-64 md:h-64"> {/* Adjusted size */}
                <Image 
                  src="/assets/Naina.jpg"
                  alt="Naina Johri"
                  width={256}  // Adjusted width
                  height={256} // Adjusted height
                  className="rounded-full object-cover"
                />
              </div>
            </div>
          </div>

          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-1xl'>"I'm a passionate Front-End Developer dedicated to crafting stunning and intuitive web experiences. I transform creative visions into beautiful, functional websites."</p>

          <a href="https://drive.google.com/file/d/1kj2uMYh_tnsJllr5s_K7Dl8NUGiE-JrV/view?usp=sharing" target='_blank' rel="noopener noreferrer">
            <MagicButton title="Download Resume" icon={<IoMdDownload />} position='right' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;