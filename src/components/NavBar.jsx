import React, { useEffect, useState } from 'react'
import logoB from '../assets/logo-black.png'
import {AiOutlineMenu} from 'react-icons/ai'
import { Card, CardBody, Navbar} from "@material-tailwind/react"
import { motion} from 'framer-motion'
import {Link} from 'react-scroll'
import Modal from 'react-modal'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { IoClose } from 'react-icons/io5'



function NavBar() {
  const [openModal, setOpenModal] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  const modalOpen = () => setOpenModal(true);
  const modalClose = () => setOpenModal(false);

  useEffect(() => {
    AOS.init();
  }, [])

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
    <Navbar className={`${!isNavbarVisible ? 'bg-transparent' : 'bg-white'} flex sticky lg:inset-0 inset-0 z-50 lg:h-[14vh] h-max justify-center rounded-none backdrop-blur-0 cursor-pointer border-none shadow-none`}>
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className='flex justify-start items-center lg:h-24 h-10 lg:max-w-[1550px] sm:max-w-[900px] lg:gap-60'>
          <div className="absolute xl:left-12 left-[-11px] lg:w-80 lg:h-auto w-40  lg:justify-start sm:justify-normal justify-start">
            <img src={logoB} />
          </div>
          <AiOutlineMenu size={24} onClick={modalOpen} className='absolute right-0 lg:hidden text-black mr-10' />
        
        <div className='absolute right-28'>
            <ul className='hidden lg:flex text-sm text-black rounded-sm gap-3 font-roboto uppercase font-bold '>
                <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
                  <Link to="hero" spy={true} smooth={true} offset={-180} duration={500}>Home</Link>
                </li>
                <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
                  <Link to="aboutme" spy={true} smooth={true} offset={250} duration={700}>About Me</Link>
                </li>
                <li className='p-4 hover:text-blue-400  focus:bg-gray-30 rounded-full'>
                  <Link to="Projects" spy={true} smooth={true} offset={-20} duration={700}>Projects</Link>
                </li>
                <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
                  <Link to="services" spy={true} smooth={true} offset={-190} duration={700}>Services</Link>
                </li>
                <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
                  <Link to="contact" spy={true} smooth={true} offset={-20} duration={700}>Contact Me</Link>
                </li>
              </ul>
          </div>
            <div>
              <Modal
                isOpen={openModal}
                contentLabel="Modal"
                className='modal fixed mx-auto inset-0 flex items-center justify-center z-50'
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <Card className='h-[70vh] w-[80%] border-2 border-black z-50' data-aos='fade-in' data-duration='1000'>
                    <CardBody className='z-50'>
                        <div>
                          <IoClose onClick={modalClose} className='absolute right-5 mt-5 cursor-pointer' />
                        </div>
                        <div className='flex flex-col text-center mt-24 gap-10 text-2xl uppercase'>
                          <Link to='hero' spy={true} smooth={true} offset={-180} duration={500} className='cursor-pointer'>Home</Link>
                          <Link to='Projects' spy={true} smooth={true} offset={-80} duration={500} className='cursor-pointer'>Project</Link>
                          <Link to='aboutme' spy={true} smooth={true} offset={-20} duration={500} className='cursor-pointer'>About Me</Link>
                          <Link to='contact' spy={true} smooth={true} offset={180} duration={500} className='cursor-pointer'>Contact Me</Link>
                        </div>
                    </CardBody>
                  </Card>
              </Modal>
           </div>
    </motion.div>
    </Navbar>
  )
}

export default NavBar