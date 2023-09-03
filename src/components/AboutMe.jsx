import Mypic from '../assets/aboutmeImg.jpg'
import React, {useState} from 'react';
import { Card, CardBody} from "@material-tailwind/react";
import  {educ, tech} from '../constants/index'
import Marquee from 'react-fast-marquee';


function AboutMe() {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <section className='lg:h-[160vh] lg:pt-72' id='aboutme'>
      <h1 className='text-center'>
        <p className='text-slate-500 font-semibold lg:text-xl lg:mb-2 text-lg'>Get to know more</p>
        <p className='font-bold lg:text-6xl text-2xl mb-8 lg:mb-0'>About Me</p>
      </h1>
        <div className='lg:flex justify-start lg:ml-36 lg:gap-10 lg:pt-28'>
          <div className='flex lg:justify-start justify-center'>
            <img src={Mypic} className='lg:h-[60vh] h-[35vh] rounded-xl shadow-xl'/>
          </div>
          <div className='flex'>
            <div className='mx-auto'>
              <Card className='lg:w-[850px] w-[450px]  lg:h-[47%] lg:py-10 lg:px-10 py-4 px-4 lg:mb-10 mb-7 mt-8 lg:mt-0 shadow-xl border border-black border-r-8 border-b-2'>
                <CardBody>
                  <p className='indent-7 lg:text-base text-xs text-justify'>HI! My name is Ross Matthew Santos.  A passionate front-end developer based in Metro Manila, Philippines. I'm a fresh gradudate and a degree holder in Bachelor of Science in Information Technology at Rizal Technological University-Boni Campus. I decided to pursue a career in Front-End Web developing because I want to showcase my skills and talent as well as to contribute in a company by designing quality web pages and making it clean, modern, responsive and detailed. I am always open for new learnings and opportunities to grow as a developer.</p>
                </CardBody>
              </Card>
              <Card className='lg:w-[850px] w-[450px] lg:h-[45%] lg:py-8 lg:px-10 py-4 px-4 lg:mb-1 shadow-xl border border-black border-r-8 border-b-2'>
                <CardBody>
                  <h1 className='lg:text-xl text-lg font-semibold'>Education | Experience</h1>
                    <div className='lg:py-6 lg:text-base text-xs mt-5 lg:mt-0'>
                      {educ.map((item) => (
                       <div className='grid grid-cols-2 lg:w-[50%] lg:mb-2 mb-2'>
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
        <div className='bg-black lg:h-[35vh] h-[20vh]'>
          <h1 className='lg:mt-28 mt-16 text-center font-bold lg:text-4xl text-xl text-white lg:pt-12 pt-6'>Tech & Tools</h1>
          <Marquee className='lg:mt-14 mt-4'>
            <div className='flex lg:gap-[106px] gap-14 mr-14 lg:mr-0'>
              {tech.map((icon) => (
                <div 
                  className='grid grid-cols' 
                  key={icon.id}
                  onMouseEnter={() => setHoveredId(icon.id)}
                  onMouseLeave={() => setHoveredId(null)}>
                  <img src={hoveredId === icon.id ? icon.image2 : icon.image} className='lg:h-20 h-14'/>
                  <span 
                  className={`text-white justify-center ${
                  hoveredId === icon.id ? 'flex justify-center text-xs lg:text-base lg:font-semibold lg:mt-2' : 'hidden' }`}
                    >{icon.title}</span>
                </div>
              ))}
            </div>
          </Marquee> 
        </div>    
    </section>
  )
}
export default AboutMe