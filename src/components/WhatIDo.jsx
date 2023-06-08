import React from 'react'
import responsive from '../assets/responsive-design.png'
import detailed from '../assets/detailed-design.png'
import flexible from '../assets/flexible-design.png'
import {Card, CardBody} from '@material-tailwind/react'

function WhatIdo() {
    const data = [
        {
            id:1,
            image:[responsive],
            title:"Responsive Design",
            description:"Build reponsive designs for Desktop, Laptop, Tablet and Mobile",
            duration: 400
        },
        {
            id:1,
            image:[detailed],
            title:"Detailed",
            description:"Double Check every details to provide clean and quality design",
            duration: 700
        },
        {
            id:1,
            image:[flexible],
            title:"Flexible",
            description:"Can adapt to any type of design such as modern or Minimalist",
            duration: 1000
        },
    ]
  return (
    <section className='mt-60 font-poppins'>
        <div className=' md:h-auto h-100 bg-slate-500  '>
            <div className='flex text-center justify-center text-4xl text-white font-poppins uppercase font-bold'>
                <p className='mt-14 md:mb-2 mb-20'>What I do</p>
            </div>
            <div className='grid md:grid-cols-3 sm:-grid-cols-1 grid-cols-1 md:h-80 w-full text-white md:gap-0 gap-16 justify-center '>
                {data.map((item) => (
                <div key={item.id} data-aos="fade-up"
                data-aos-duration={item.duration} className='grid h-60  md:w-80 w-80 m-auto justify-center '>
                        <div className='ml-2'><img className="relative md:ml-28 sm:ml-0 ml-28 h-20 w-20" src={item.image} /></div>
                        <p className='text-center md:mb-5 md:text-2xl'>{item.title}</p>
                        <p className='text-center md:text-lg'>{item.description}</p>
                    

                </div>
            ))}

        </div>
        </div>
     
    </section>
  )
}

export default WhatIdo
