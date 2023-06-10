import React from 'react'
import { Typography } from '@material-tailwind/react'
import { Card, CardBody} from "@material-tailwind/react";

function Projects() {
  const proj = [
    {
      id:1,
      title:"hello",
      description:"",
      stack:""
    },
    {
      id:2,
      title:"hello",
      description:"",
      stack:""
    }
  ]
  return (
    <section id='Projects'>
        <div className='h-screen w-auto py-20'>
          <Typography className="font-poppins text-4xl font-bold text-center uppercase text-slate-600 md:py-10 md:mb-10">my projects</Typography>
        <div className='grid md:text-sm grid-cols-1 gap-2 md:gap-7 md:ml-2 text-center font-semibold uppercase'>
               {proj.map((item) => ( 
                <Card key={item.id} className='mt-6 md:w-100 md:h-80 md:max-w-[700px]  justify-center transition-transform duration-300 transform shadow-md' >
                  <CardBody>
                    <Typography className='mt-2'>{item.title}</Typography>
                    <Typography className='mt-2'></Typography>
                  </CardBody>
                </Card>
                ))}
              </div>
              </div>


    </section>
  )
}

export default Projects