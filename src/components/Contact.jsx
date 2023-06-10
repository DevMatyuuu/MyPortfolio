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
                <Typography className="text-center md:text-4xl sm:text-4xl text-xl font-poppins font-bold md:mb-10">
                  Let's Connect!
                </Typography>
                <Typography className="text-center md:text-md text-sm font-poppins font-normal">
                  Interested working with me? You can say hello to my e-mail and Mobile number: <br></br>
                  <span className='text-blue-500 md:text-md text-sm'>Matthewsantos120216@gmail.com</span><br></br> 
                  <span className='text-blue-500 md:text-md text-sm'>09300345314</span> 
                </Typography>
            </div>
    </div>
  </section>
  )
}

export default Footer