import React from 'react';
import { Typography } from "@material-tailwind/react";
import CardEffect from './ProjSliders/cardEffect';
import NormalSlider from './ProjSliders/normalSlider';


function Projects() {

  return (
    <section id='Projects' className='xl:h-[110vh] sm:h-[100vh] md:h-[100vh] w-auto lg:mt-40 mt-20  xl:mt-0 -z-50'>
      <div>
        <Typography className="font-poppins lg:text-lg text-xs font-bold text-center text-slate-600 lg:mb-2 mb-1">Take a look at some of my</Typography>
        <Typography className='font-poppins lg:text-6xl text-4xl font-bold text-center uppercase text-black lg:mb-16'>Projects</Typography>
      </div>
      <div>
        <div className='hidden xl:block'>
          <CardEffect />
        </div>
        <div className='xl:hidden'>
          <NormalSlider />
        </div>
      </div>
    </section>
  )
}

export default Projects;
