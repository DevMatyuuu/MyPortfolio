import React from 'react'
import { services } from '../constants'
import 'aos/dist/aos.css';

function WhatIdo() {

  return (
    <section id='services' className='font-poppins sm:h-[80vh] sm:mt-[600px] md:mt-[700px] md:h-[80vh] lg:h-[100vh] lg:pt-80 xl:h-[100vh] mt-20 xl:mt-0  mb-40 sm:mb-0 lg:mb-96 xl:mb-0'>
        <div className=' lg:h-[77vh] h-100 bg-white'>
            <h1 className='text-center'>
                <p className='text-slate-600 font-semibold lg:mb-2 lg:text-lg text-xs font-poppins'>My Offered</p>
                <p className='font-bold lg:text-6xl text-4xl mb-8 lg:mb-16 font-poppins uppercase'>Services</p>
            </h1>
            <div className='grid md:grid-cols-1 sm:-grid-cols-3 grid-cols-1 xl:grid-cols-3 md:h-80 xl:w-[95%] mx-5 xl:mx-auto md:mx-auto sm:mt-20 sm:w-[90%] sm:mx-0 text-white md:gap-0 gap-16  '>
                {services.map((item) => (
                <div key={item.id} data-aos="fade-in"
                data-aos-duration={item.duration} className='grid lg:h-60  lg:w-80 w-60 text-black sm:mx-16 md:mx-28 xl:mx-10  mx-auto'>
                    <div className='flex sm:flex-row md:flex-row lg:flex-row flex-col lg:items-center xl:gap-10 lg:gap-5 sm:gap-20 md:gap-20  sm:mx-auto'>
                            <p className='text-slate-300 font-semibold xl:text-9xl lg:text-7xl text-5xl mb-4 lg:mb-0 font-Oswald'>{item.number}</p>
                            <div className='items-center'>
                                <p className='lg:text-xl text-sm font-bold mb-1 lg:mb-2'>{item.title}</p>
                                <p className='xl:w-60 w-48 sm:w-80 md:w-80 lg:text-base text-sm'>{item.description}</p>
                            </div>
                    </div>
                </div>
            ))}
        </div>
     </div>
    </section>
  )
}

export default WhatIdo
