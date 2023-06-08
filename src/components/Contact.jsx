import React,{useEffect} from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Typography} from '@material-tailwind/react'

function Footer() {
  useEffect(() => {
    AOS.init();
  }, [])
  return (
  <section className='mb-10 h-100' id="contact">
    <div className="w-full bg-white p-8">
      
      <hr className="my-8 border-none" />
      <div data-aos='fade-up'>
                <Typography className="text-center md:text-4xl sm:text-4xl text-xl font-poppins font-bold">
                  Let's Connect!
                </Typography>
                <Typography className="text-center text-4xl font-poppins font-bold">
                  
                </Typography>
            </div>
    </div>
  </section>
  )
}

export default Footer