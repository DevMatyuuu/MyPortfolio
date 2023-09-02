import Mypic from '../assets/aboutMeImg.jpg'
import React from 'react';
import { Card, CardBody} from "@material-tailwind/react";
import  {educ} from '../constants/index'


function AboutMe() {

  return (
    <section className='lg:h-[140vh] lg:pt-72' id='aboutme'>
      <h1 className='text-center'>
        <p className='text-slate-500 font-semibold text-xl lg:mb-2'>Get to know more</p>
        <p className='font-bold text-6xl'>About Me</p>
      </h1>
        <div className='lg:flex justify-start lg:ml-28 lg:gap-10 lg:pt-28'>
          <div className=''>
            <img src={Mypic} className='lg:h-[60vh] lg: rounded-xl shadow-xl'/>
          </div>
          <div className='flex'>
            <div>
              <Card className='lg:w-[850px] lg:h-[47%] lg:py-3 lg:px-3 lg:mb-10 shadow-xl border border-black'>
                <CardBody>
                  <p className='indent-4 text-justify'>HI! My name is Ross Matthew Santos.  A passionate front-end developer based in Metro Manila, Philippines. I'm a fresh gradudate and a degree holder in Bachelor of Science in Information Technology at Rizal Technological University-Boni Campus. I decided to pursue a career in Front-End Web developing because I want to showcase my skills and talent as well as to contribute in a company by designing quality web pages and making it clean, modern, responsive and detailed. I am always open for new learnings and opportunities to grow as a developer.</p>
                </CardBody>
              </Card>
              <Card className='lg:w-[850px] lg:h-[45%] lg:py-0 lg:px-3 lg:mb-1 shadow-xl border border-black'>
                <CardBody>
                  <h1 className='text-xl font-semibold'>Education | Experience</h1>
                    <div className='lg:py-6'>
                      {educ.map((item) => (
                       <div className='grid grid-cols-2 lg:w-[50%]'>
                          <div>
                              {item.date}
                          </div>
                          <div className='lg:w-96'>
                              {item.place}
                          </div>
                       </div>
                      ))}
                    </div>
                </CardBody>
              </Card>
            </div>
          </div>
        </div>      
    </section>
  )
}
export default AboutMe