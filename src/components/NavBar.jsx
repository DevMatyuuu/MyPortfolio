import React, { useEffect, useState } from 'react'
import logoB from '../assets/logo-black.png'
import {AiOutlineClose,AiOutlineMenu} from 'react-icons/ai'
import { Button,Navbar} from "@material-tailwind/react"
import { motion} from 'framer-motion'
import {Link} from 'react-scroll'
import { Tooltip, Typography } from "@material-tailwind/react";
import { InformationCircleIcon } from "@heroicons/react/24/outline";


function NavBar() {
  const [nav, setNav] = useState(false)
  
  
  const handleNav = () => {
    setNav(!nav)
  }
 

  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      setIsNavbarVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [prevScrollPos]);
    
  return (
    <Navbar className="sticky md:inset-2 inset-10 z-10 h-max max-w-full rounded-none bg-transparent cursor-pointer border-none shadow-none">
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className='flex justify-between items-center md:h-24 h-10 md:max-w-[1510px] sm:max-w-[900px]'>
        <div className="md:w-80 md:h-auto w-40 md:ml-10 sm:ml-0 ml-0 md:mr-0 sm:mr-0 mr-auto md:justify-normal sm:justify-normal justify-start"><img src={logoB} /></div>
          <ul className='hidden md:flex text-sm text-black rounded-sm gap-5 font-roboto uppercase font-bold '>
            <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
              <Link to="hero" spy={true} smooth={true} offset={-180} duration={500}>Home</Link>
            </li>
            <li className='p-4 hover:text-blue-400  focus:bg-gray-30 rounded-full'>
              <Link to="/" spy={true} smooth={true} offset={50} duration={500}>Projects</Link>
            </li>
            
            <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
              <Link to="aboutme" spy={true} smooth={true} offset={-50} duration={500}>About Me</Link>
            </li>
            <Button className='p-3 bg-slate-500 hover:bg-slate-400 text-white rounded-md text-md' href="/Contact">
              <Link to="contact" spy={true} smooth={true} offset={50} duration={500}>Contact Me</Link>
            </Button>
          </ul>
    
          <div onClick={handleNav} className='block md:hidden md:mr-0 sm:mr-10 mr-5 px-5 '>
            {!nav ?  <AiOutlineMenu size={20} color='black'/> : <AiOutlineClose size={20} color='black'  />}
          </div>
          <div className={!nav ? 'fixed right-[-100%] top-20 w-[60%] h-full text-center justify-center bg-slate-400 ease-out duration-500': 'fixed right-0 top-20 w-[50%] h-full text-center justify-center bg-slate-400 ease-in-out duration-500 md:hidden'}>
            <ul className='pt-12 uppercase text-white font-bold text-md font-roboto text-center justify-center' >
                <li className='p-4 sm:text-xl' href="/Home">Home</li>
                <li className='p-4 sm:text-xl' href="/Projects">Projects</li>
                <li className='p-4 sm:text-xl' href="/AboutMe">
                  <Link to="aboutme" spy={true} smooth={true} offset={0} duration={500}>About Me</Link>
                </li>
                <Button className='p-3 text-white rounded-md bg-slate-500 hover:bg-slate-400' href="/Contact">
                  <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>Contact Me</Link>
                </Button>
              </ul>
          </div>
    </motion.div>
    </Navbar>
  )
}

export default NavBar