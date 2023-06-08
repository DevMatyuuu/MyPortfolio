import React,{useEffect} from "react";
import { Typography} from '@material-tailwind/react'


 
const currentYear = new Date().getFullYear();

function Footer() {


  return (
    <section className='mb-10 '>
         <div className="w-full bg-white p-8">
           
      <hr className="my-8 border-blue-gray-50" />
            
            
      <Typography color="blue-gray" className="text-center font-normal">
        &copy; 2023 design and developed by Matthew Santos.
      </Typography>
    </div>
    </section>
  )
}

export default Footer