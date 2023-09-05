import React,{useEffect} from 'react'
import Typed from 'react-typed'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Tooltip } from '@material-tailwind/react';
import {AiFillGithub, AiFillLinkedin, AiFillFacebook,} from 'react-icons/ai'
import resumePDF from '../assets/resume/resume.pdf';
import Lottie from 'lottie-react'
import heroAnimation from '../assets/animated/hero.json'
import scrollAnimation from '../assets/animated/scroll.json'




function Hero() {

  const handleFbLink = () => {
    window.open('https://www.facebook.com/Matthew.santos1202/', '_blankFB');
  };
  const handleGitLink = () => {
    window.open('https://github.com/DevMatyuuu', '_blankGit');
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
    <section className='flex flex-col lg:flex-row justify-center lg:grid-cols-2 lg:h-[40vh] sm:h-auto h-[65vh]  lg:mt-0 sm:mt-20  mb-40' id='hero'>
      <div className='absolute top-0 left-0 w-[97%] h-48 bg-gradient-to-br from-slate-200  to-slate-400 rounded-xl filter blur-3xl opacity-75 z-49' />
        <div data-aos="fade-right" data-aos-easing="ease-in-sine" data-aos-duration="800" className="lg:py-20 sm:py-0 lg:mt-12 sm:mt-20 text-start px-7 justify-start font-poppins lg:h-100 h-20 lg:w-[47%]">
                  <h1 className="lg:relative lg:text-6xl sm:text-5xl text-3xl mt-6 sm:mt-0 mr-5 font-bold text-black justify-start text-start lg:mb-2">Hi! I'm <span className='bg-clip-text text-transparent bg-gradient-to-r from-slate-500 via-slate-500 to-slate-800'>Matthew Santos</span></h1>
                  <Typed className="z-0 lg:text-5xl sm:text-4xl text-xl font-bold bg-clip-text text-black" strings={['Front-End Web Developer', 'React Developer']}  typeSpeed={40 }backSpeed={50}
                  loop />
          <div className='flex py-5' data-aos='fade-up' >   
                <Tooltip content="Github" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold"  animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://github.com/DevMatyuuu' target="_blankGit" rel="noopener noreferrer" onClick={handleGitLink}><AiFillGithub className='mr-2 transition duration-300 transform hover:scale-125' size={32}  /></a></Tooltip>
                <Tooltip content="LinkedIn" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://www.linkedin.com/in/ross-matthew-santos-476867279/' target="_blankLinkedIn" rel="noopener noreferrer" onClick={handLinkedInLink}><AiFillLinkedin className='mr-2 transition duration-300 transform hover:scale-125' size={32}  /></a></Tooltip>
                <Tooltip content="Facebook" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 },unmount: { scale: 0, y: 0 },}}><a href='https://www.facebook.com/Matthew.santos1202/' target="_blankFB" rel="noopener noreferrer" onClick={handleFbLink}><AiFillFacebook className='transition duration-300 transform hover:scale-125' size={32} /> </a></Tooltip>
            </div>
                  <h1 className="z-49 lg:text-md sm:text-lg text-sm text-slate-500 font-bold lg:mt-3">" Designing the Web, Illuminating Your Ideas. "</h1>
            <div className="lg:py-1 py-2 text-start justify-start lg:mt-2">
                <Button onClick={handleResumeButton} target="_blackresume" className="middle z-50 none bg-transparent center mr-3 rounded-lg border lg:mt-10 sm:mt-5 mt-5 border-black lg:py-4 lg:px-9 py-3 px-3 font-sans lg:text-md text-xs font-bold uppercase text-black transition-all hover:opacity-75  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-slate-300"
                data-ripple-dark="true">Resume pdf</Button>
            </div>
      </div>
      <div data-aos='fade-down' data-aos-duration='1000' className='lg:py-0 z-0 lg:mt-0 mt-[200px] lg:max-w-[680px] sm:max-w-auto max-w-auto lg:h-80 lg:mb-0 sm:mb-80 mb-40 sm:h-auto'>
            <Lottie animationData={heroAnimation}/>
      </div>
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"'>
        <div data-aos='fade-down' data-aos-duration='1400' className='md:flex lg:flex hidden'>
            <Lottie animationData={scrollAnimation} className='lg:h-32 md:h-40 z-50'/>
        </div>
      </div> 
  </section>
  

  )
}

export default Hero