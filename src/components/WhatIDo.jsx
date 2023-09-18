import React from 'react'
import { services } from '../constants'
import 'aos/dist/aos.css';

function WhatIdo() {

  return (
    <section id='services' className='font-poppins lg:mt-40 sm:mt-80 mt-20 mb-40 lg:mb-0'>
        <div className=' lg:h-[77vh] h-100 bg-white'>
            <h1 className='text-center'>
                <p className='text-slate-600 font-semibold lg:mb-2 lg:text-lg text-xs font-poppins'>My Offered</p>
                <p className='font-bold lg:text-6xl text-4xl mb-8 lg:mb-16 font-poppins uppercase'>Services</p>
            </h1>
            <div className='grid md:grid-cols-3 sm:-grid-cols-1 grid-cols-1 md:h-80 lg:w-[95%] mx-5 text-white md:gap-0 gap-16 '>
                {services.map((item) => (
                <div key={item.id} data-aos="fade-in"
                data-aos-duration={item.duration} className='grid lg:h-60  lg:w-80 w-60 text-black mx-auto'>
                    <div className='flex lg:flex-row flex-col lg:items-center lg:gap-10 sm:mx-auto'>
                            <p className='text-slate-300 font-semibold lg:text-9xl text-5xl mb-4 lg:mb-0 font-Oswald'>{item.number}</p>
                            <div className='items-center'>
                                <p className='lg:text-xl text-sm font-bold mb-1 lg:mb-2'>{item.title}</p>
                                <p className='lg:w-60 w-48 lg:text-base text-sm'>{item.description}</p>
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
