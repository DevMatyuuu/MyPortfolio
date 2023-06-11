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
          <Typography className="font-poppins text-4xl font-bold text-center uppercase text-slate-600 md:py-10 md:mb-10">my projects (Currently Building)</Typography>
       </div>

    </section>
  )
}

export default Projects