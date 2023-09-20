import React, { useEffect } from 'react';
import { Link } from 'react-scroll';
import { Button, Tooltip } from '@material-tailwind/react';
import { AiFillGithub, AiFillLinkedin, AiFillFacebook } from 'react-icons/ai';
import Lottie from 'lottie-react';
import heroAnimation from '../assets/animated/hero.json';
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
    className='flex h-screen lg:h-[60vh] xl:h-[50vh] mt-28 lg:mt-10 xl:mt-5'
    id='hero'
      >
      <div className='xl:hidden lg:hidden absolute top-24 left-0 w-[97%] h-[55vh] bg-gradient-to-br lg:mt-0 mt-10  from-slate-100  to-slate-400 rounded-2xl filter blur-3xl opacity-50' /> 
      <div className='flex lg:justify-center xl:justify-center px-7 z-0 w-[100%] mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="xl:w-[45%] xl:mt-20 lg:mt-16 lg:w-[50%]"
        >
          <span className='text-3xl lg:text-3xl xl:text-4xl sm:text-4xl font-bold'>Hi! I am</span>
          <motion.h1
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className='mt-1 xl:mt-2'
          >
            <span className='flex font-bold bg-clip-text lg:text-5xl xl:text-7xl sm:text-6xl text-4xl text-transparent bg-gradient-to-r from-slate-500 via-slate-500 to-slate-800'>
            Matthew Santos
            </span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.2}}
            className='mt-1 xl:mt-2'
          >
            <span className='font-bold text-3xl xl:text-5xl sm:text-5xl lg:text-4xl'>Front-End React Developer</span>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 0 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2, delay: 0.4 }}
          >
            <div className='flex py-5'>
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
            className="z-49 lg:text-md sm:text-lg xl:text-lg text-sm lg:text-sm text-slate-500 font-bold xl:mt-3"
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
                  className="middle z-50 none bg-transparent center mr-3 rounded-lg border xl:mt-10 sm:mt-5 mt-5 border-black sm:py-4 sm:px-6 lg:py-4 lg:px-9 py-3 px-3 font-sans xl:text-[14px] lg:text-md text-xs font-bold uppercase text-black transition-all hover:opacity-75  active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none hover:bg-slate-300"
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
          className='hidden sm:hidden md:hidden lg:block z-0 lg:mt-0 xl:mt-0 sm:mt-20 mt-[250px] lg:w-[43%] sm:max-w-auto max-w-auto lg:h-80 lg:mb-0 sm:mb-80 mb-40 xl:mb-0 sm:h-auto'
        >
          <Lottie animationData={heroAnimation} />
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;
