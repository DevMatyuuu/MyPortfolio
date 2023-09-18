import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Button, Tooltip } from '@material-tailwind/react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import resumePDF from '../assets/resume/resume.pdf';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/animated/hero.json';
import scrollAnimation from '../assets/animated/scroll.json';
import { motion } from 'framer-motion';

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


  return (
    <section
    className='flex flex-col sm:flex-row justify-center sm:grid-cols-2 sm:grid-rows-2 sm:h-[100vh] xl:h-[20vh] h-[40vh] mb-[400px] lg:mt-0 sm:mt-20'
    id='hero'
      >
      <div className='xl:hidden lg:hidden absolute top-24 left-0 w-[97%] h-[55vh] bg-gradient-to-br lg:mt-0 mt-10  from-slate-100  to-slate-400 rounded-2xl filter blur-3xl opacity-50' /> 
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="lg:py-20 z-0 sm:py-0 PY-0 lg:mt-12 sm:mt-0 text-start px-7 justify-start font-poppins lg:h-100 h-20 lg:w-[47%]"
      >
        <span className='text-3xl xl:text-4xl font-bold'>Hi! I am</span>
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className='mt-1 xl:mt-2'
        >
          <span className='flex font-bold bg-clip-text xl:text-7xl text-4xl text-transparent bg-gradient-to-r from-slate-500 via-slate-500 to-slate-800'>
           Matthew Santos
          </span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.2}}
          className='mt-1 xl:mt-2'
        >
          <span className='font-bold text-3xl'>Front-End React Developer</span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.4 }}
        >
          <div className='flex py-5' data-aos='fade-up'>
            <Tooltip content="Github" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 }, unmount: { scale: 0, y: 0 } }}>
              <a href='https://github.com/DevMatyuuu' target="_blankGit" rel="noopener noreferrer" onClick={handleGitLink}><AiFillGithub className='mr-2 transition duration-300 transform hover:scale-125' size={32} /></a>
            </Tooltip>
            <Tooltip content="LinkedIn" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 }, unmount: { scale: 0, y: 0 } }}>
              <a href='https://www.linkedin.com/in/ross-matthew-santos-476867279/' target="_blankLinkedIn" rel="noopener noreferrer" onClick={handLinkedInLink}><AiFillLinkedin className='mr-2 transition duration-300 transform hover:scale-125' size={32} /></a>
            </Tooltip>
            <Tooltip content="Facebook" placement="bottom-end" className="text-black bg-slate-400 px-3 font-poppins font-bold" animate={{ mount: { scale: 1, y: 5 }, unmount: { scale: 0, y: 0 } }}>
              <a href='https://www.facebook.com/Matthew.santos1202/' target="_blankFB" rel="noopener noreferrer" onClick={handleFbLink}><AiFillFacebook className='transition duration-300 transform hover:scale-125' size={32} /> </a>
            </Tooltip>
          </div>
        </motion.div>
        <motion.h1
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.6 }}
          className="z-49 lg:text-md sm:text-lg text-sm text-slate-500 font-bold lg:mt-3"
        >
          "Designing the Web, Illuminating Your Ideas."
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2, delay: 0.8 }}
        >
          <div className="lg:py-1 py-2 text-start justify-start lg:mt-2">
            <Link to='contact' spy={true} smooth={true} offset={150} duration={1000}>
              <Button
                className="middle z-50 none bg-transparent center mr-3 rounded-lg border lg:mt-10 sm:mt-5 mt-5 border-black lg:py-4 lg:px-9 py-3 px-3 font-sans xl:text-[14px] lg:text-md text-xs font-bold uppercase text-black transition-all hover:opacity-75  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-slate-300"
                data-ripple-dark="true"
              >
                Contact Me
              </Button>
            </Link>
          </div>
        </motion.div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1 }}
        className='hidden lg:block lg:py-0 z-0 lg:mt-10 sm:mt-20 mt-[250px] lg:max-w-[680px] sm:max-w-auto max-w-auto lg:h-80 lg:mb-0 sm:mb-80 mb-40 sm:h-auto'
      >
        <Lottie animationData={heroAnimation} />
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 0 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: 1.2 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 -translate-y-1/2"'
      >
        <div className='md:hidden lg:flex hidden sm:hidden '>
          <Lottie animationData={scrollAnimation} className='lg:h-32 md:h-40 z-50' />
        </div>
      </motion.div>
    </section>
  );
}

export default Hero;
