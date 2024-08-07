import React from 'react';
import Image from 'next/image';
import { Spotlight } from './ui/Spotlight';
import { TextGenerateEffect } from './ui/TextGenerateEffect';
import MagicButton from './ui/MagicButton';
import { IoMdDownload } from 'react-icons/io';
import { BackgroundGradient } from './ui/BackgroundGradient';

const Hero = () => {
  return (
    <div className="pb-20 pt-36">
      <div>
        <Spotlight className='-top-40 -left-10 md:-left-32 md:-top-20 h-screen' fill="white" />
        <Spotlight className='top-10 left-full h-[80vh] w-[50vw]' fill="purple" />
        <Spotlight className='top-28 left-80 h-[80vh] w-[50vw]' fill="blue" />
      </div>

      {/* Grid and Dot Backgrounds by aceternityUI */}
      <div className="h-screen w-full dark:bg-black-100 bg-white dark:bg-grid-white/[0.05] bg-grid-black/[0.2] flex items-center justify-center absolute top-0 left-0">
        {/* Radial gradient for the container to give a faded look */}
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black-100 bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"/>
      </div>
      <div className='flex justify-center relative my-20 z-10'>
        <div className='max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center'>

          <h2 className='uppercase tracking-widest text-xs text-center text-blue-100 max-w-80 relative'>
            Dynamic web Magic with Next.js

            {/* Adding your image */}
            <div className='absolute right-[-60px] top-[-30px] md:relative md:top-[-60px] md:right-0 flex justify-center'>
              <BackgroundGradient className="w-24 h-24 rounded-full overflow-hidden">
                <Image 
                  src="/Assets/Naina.jpg"
                  alt="Naina Johri"
                  width={96}
                  height={96}
                  className="object-cover"
                />
              </BackgroundGradient>
            </div>
          </h2>
          
          <TextGenerateEffect 
            className='text-center text-[40px] md:text-5xl lg:text-6xl'
            words="Welcome to my Portfolio!"
          />
          
          <p className='text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl'>Hi, I'm Naina Johri</p>
          
          <a href="https://drive.google.com/file/d/1kj2uMYh_tnsJllr5s_K7Dl8NUGiE-JrV/view?usp=sharing" target='_blank' rel="noopener noreferrer">
            <MagicButton title="Download Resume" icon={<IoMdDownload />} position='right' />
          </a>
        </div>
      </div>
    </div>
  );
}

export default Hero;