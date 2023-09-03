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
    <Navbar className="sticky lg:inset-5 inset-10 z-10 h-max max-w-full rounded-none bg-transparent cursor-pointer border-none shadow-none">
        <motion.div 
        initial={{ opacity: 1 }}
        animate={{ opacity: isNavbarVisible ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className='flex justify-between items-center lg:h-24 h-10 lg:max-w-[1550px] sm:max-w-[900px]'>
        <div className="lg:w-80 lg:h-auto w-40 lg:ml-16 sm:ml-0 ml-0 lg:mr-0 sm:mr-0 mr-auto lg:justify-normal sm:justify-normal justify-start"><img src={logoB} /></div>
          <ul className='hidden lg:flex text-sm lg:ml-[47%] text-black rounded-sm gap-3 font-roboto uppercase font-bold '>
            <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
              <Link to="hero" spy={true} smooth={true} offset={-180} duration={500}>Home</Link>
            </li>
            <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
              <Link to="aboutme" spy={true} smooth={true} offset={250} duration={500}>About Me</Link>
            </li>
            <li className='p-4 hover:text-blue-400  focus:bg-gray-30 rounded-full'>
              <Link to="Projects" spy={true} smooth={true} offset={50} duration={700}>Projects</Link>
            </li>
            <li className='p-4 hover:text-blue-400 focus:bg-gray-30 rounded-full'>
              <Link to="contact" spy={true} smooth={true} offset={50} duration={1000}>Contact Me</Link>
            </li>
          </ul>
            <AiOutlineMenu size={24} onClick={modalOpen} className='lg:hidden text-black mr-10' />
            <div>
              <Modal
                isOpen={openModal}
                contentLabel="Modal"
                onRequestClose={!openModal}
                className='modal fixed inset-0 flex items-center justify-center bg-transparent'
                overlayClassName="modal-overlay fixed inset-0 bg-black bg-opacity-25 flex items-center justify-center">
                  <Card className='h-[70vh] w-[80%] border-2 border-black' data-aos='fade-down' data-duration='1000'>
                    <CardBody>
                        <div>
                          <IoClose onClick={modalClose} className='absolute right-5 mt-5 cursor-pointer' />
                        </div>
                        <div className='flex flex-col text-center mt-24 gap-10 text-2xl uppercase'>
                          <Link>Home</Link>
                          <Link>Project</Link>
                          <Link>About Me</Link>
                          <Link>Contact Me</Link>
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