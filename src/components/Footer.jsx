import React,{useEffect} from "react";
import { Typography} from '@material-tailwind/react'


 
const currentYear = new Date().getFullYear();

function Footer() {


  return (
    <section className='mb-10 lg:mt-28 xl:mt-0 px-8 lg:px-0 xl:px-0'>
         <div className="w-full bg-white">
          <hr className=" border-blue-gray-50" />  
            <Typography color="blue-gray" className="text-center font-normal pt-10">
              &copy; {currentYear} designed and developed by Matthew Santos.
            </Typography>
        </div>
  </section>
  )
}

export default Footer