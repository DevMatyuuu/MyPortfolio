import React,{useEffect} from 'react'
import heroImg from '../assets/hero_img.svg'
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Tooltip } from '@material-tailwind/react';
import {AiFillGithub, AiFillLinkedin, AiFillFacebook,} from 'react-icons/ai'
import resumePDF from '../assets/resume/RMSantos-resume.pdf';




function Hero() {

  const handleFbLink = () => {
    window.open('https://www.facebook.com/Matthew.santos1202/', '_blankFB');
  };
  const handleGitLink = () => {
    window.open('https://www.facebook.com/Matthew.santos1202/', '_blankGit');
  };
  const handLinkedInLink = () => {
    window.open('https://www.facebook.com/Matthew.santos1202/', '_blankLinkedIn');
  };

  const handleResumeButton = () => {
    window.open(resumePDF, '_blankresume'); 
  };

  useEffect(() => {
    AOS.init();
  }, [])
     
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 md:h-100 sm:h-auto h-auto mt-20 md:ml-10' id='hero'>
         <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="1000" className="md:py-20 sm:py-0 md:mt-10 sm:mt-20 text-start md:ml-20 ml-10 justify-start font-poppins md:h-100 h-20 md:w-full">
                <h1 className="md:relative md:text-6xl sm:text-5xl text-2xl mt-6 sm:mt-0 mr-5 font-bold text-black justify-start text-start md:mb-2">Hi! I'm Matthew Santos</h1>
                <Typed className="z-0 md:text-5xl sm:text-4xl text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-slate-500 to-slate-800" strings={['Front-End Web Developer', 'React Developer']}  typeSpeed={40 }backSpeed={50}
                 loop />
         <div className='flex py-5' data-aos='fade-up' >   
               <Tooltip content="Github" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold"  animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://github.com/R0su/' target="_blankGit" rel="noopener noreferrer" onClick={handleGitLink}><AiFillGithub className='mr-2 transition duration-300 transform hover:scale-125' size={40}  /></a></Tooltip>
               <Tooltip content="LinkedIn" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://www.linkedin.com/in/ross-matthew-santos-476867279/' target="_blankLinkedIn" rel="noopener noreferrer" onClick={handLinkedInLink}><AiFillLinkedin className='mr-2 transition duration-300 transform hover:scale-125' size={40}  /></a></Tooltip>
               <Tooltip content="Facebook" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://www.facebook.com/Matthew.santos1202/' target="_blankFB" rel="noopener noreferrer" onClick={handleFbLink}><AiFillFacebook className='transition duration-300 transform hover:scale-125' size={40} /> </a></Tooltip>
           </div>
                <h1 className="z-0 md:text-sm sm:text-lg text-xs text-slate-500 font-bold  md:ml-0.5">Building creative UI with <span className='text-blue-500'>ReactJS</span> and <span className='text-blue-400 font-bold'>Tailwind CSS</span></h1>
          
          <div className="md:py-1 py-2 text-start justify-start">
               <Button onClick={handleResumeButton} target="_blackresume" className="middle none center mr-3 rounded-md border md:mt-10 sm:mt-5 mt-5 border-black md:py-4 md:px-9 py-3 px-3 font-sans md:text-md text-xs font-bold uppercase text-black transition-all hover:opacity-75  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-slate-300"
               data-ripple-dark="true">Resume pdf</Button>
          </div>
    </div>
    <div className='md:py-14 md:mt-20 py-80 md:ml-0 ml-6 md:max-w-[680px] sm:max-w-auto max-w-auto md:h-100 sm:h-auto h-60'>
          <img data-aos="fade-down" data-aos-easing="ease-in-sine" data-aos-duration="1000" src={heroImg}></img>
      
    </div>
    
    
  </section>
  

  )
}

export default Hero