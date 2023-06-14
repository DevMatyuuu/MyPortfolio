import Mypic from '../assets/Mypic.jpg'
import reactIcon from '../assets/react-icon.png'
import cssIcon from '../assets/icons/css-icon.png'
import htmlIcon from '../assets/html-icon.png'
import jsIcon from '../assets/js-icon.png'
import tailwindIcon from '../assets/tailwind-icon.png'
import phpIcon from '../assets/php-icon.png'
import viteIcon from '../assets/vite-icon.png'
import React from 'react';
import { Card, CardBody} from "@material-tailwind/react";





function AboutMe() {
  const data = [
    {
      id: 1,
      image:[htmlIcon],
      title:"html",
      style:"shadow-orange-500"
    },
    {
      id: 2,
      image:[cssIcon],
      title:"css",
      style:"shadow-blue-500"
    },
    {
      id: 3,
      image:[jsIcon],
      title:"js",
      style:"shadow-yellow-500"
    },
    {
      id: 4,
      image:[reactIcon],
      title:"React",
      style:"shadow-sky-500"
    },
    {
      id: 5,
      image:[phpIcon],
      title:"php",
      style:"shadow-violet-800",
      TitleStyle:"mt-2"
      
    },
    {
      id: 6,
      image:[tailwindIcon],
      title:"tailwind",
      style:"shadow-sky-500"
      
    },
    {
      id: 7,
      image:[viteIcon],
      title:"vite",
      style:"shadow-purple-600",
      TitleStyle:"mt-2"
    },
    
  ]



  return (
    <section className="grid md:grid-cols-2 sm:grid-col grid-col md:justify-center sm:justify-center justify-center md:py-0 md:ml-20 m-auto md:gap-0 sm:gap-20 gap-5  text-center " id='aboutme'>
         
          <div data-aos="zoom-in" data-aos-duration="500" class="md:flex w-full h-100 md:max-w-[100rem] sm:max-w-[30rem] max-w-[20rem] md:ml-10 m-auto flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl md:py-0  md:mt-40" >
          <div class="md:m-0 md:w-80 md:h-auto sm:h-auto h-auto sm:auto w-auto  shrink-0 overflow-hidden md:rounded-xl rounded-xl md:rounded-r-none bg-white bg-clip-border text-gray-700 shadow-2xl flex justify-center">
                  <img
                    src={Mypic}
                    className="h-full w-full justify-center text-center align-middle"/>
           </div>
                  <div class="p-6 text-center">
                        <div><h6 class="mb-4 block md:text-3xl sm:text-2xl font-poppins font-bold leading-relaxed tracking-normal text-slate-600 antialiased uppercase md:mr-5 text-start md:ml-4 "> About Me</h6></div>
                        <p class="md:ml-5 md:py-5 mb-5block md:text-base sm:text-xl font-normal leading-relaxed text-gray-700 antialiased font-poppins text-justify text-xs indent-10 md:mb-0 mb-5">
                        HI! My name is Ross Matthew Santos. A passionate front-end developer based in Metro Manila, Philippines. I'm a fresh gradudate and a degree holder in Bachelor of Science in Information Technology at Rizal Technological University-Boni Campus.  
                        </p>
                        <p class="md:ml-5 md:mb-8 block md:text-base sm:text-xl font-normal leading-relaxed text-gray-700 antialiased font-poppins text-justify text-xs indent-10">
                        I decided to pursue a career in Front-End Web developing because I want to showcase my skills and talent as well as to contribute in a company by designing quality web pages and making it clean, modern, responsive and detailed. I am always open for new learnings and opportunities to grow as a developer. 
                        </p>
                      </div>
                      
         </div>
          <div data-aos="zoom-in" data-aos-duration="500" className="md:flex flex w-full md:max-w-[35rem] sm:max-w-[30rem] max-w-[20rem] md:ml-20 ml-auto flex-row rounded-xl bg-clip-border text-gray-700 shadow-2xl md:mt-40">
            <div class="p-6 md:text-start text-center w-full"> 
              <h6 class="mb-4 block md:text-3xl sm:text-2xl text-lg md:ml-5 font-poppins font-bold text-slate-600 antialiased uppercase text=start"> Skills</h6>
              <div className='grid md:text-sm md:grid-cols-4 sm:grid-cols-3 grid-cols-3 gap-2 md:gap-7 md:ml-2 justify-center text-center font-semibold uppercase'>
               {data.map((item) => ( 
                <Card key={item.id} className={`mt-6 w-auto h-auto  justify-center transition-transform duration-300 transform shadow-md hover:scale-105 duration 600 ${item.style}`} >
                  <CardBody>
                    <img src={item.image} className={item.TitleStyle} />
                    <p className='mt-2'>{item.title}</p>
                  </CardBody>
                </Card>
                ))}
              </div>
            </div>
          </div>
                      
    </section>
  )
}
export default AboutMe