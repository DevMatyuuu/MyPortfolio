import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import { Card, CardBody, Chip } from "@material-tailwind/react";
import { proj} from '../../constants';
import { AiFillGithub, AiOutlineGlobal } from 'react-icons/ai';
import 'aos/dist/aos.css';
import 'swiper/css/effect-cards';
import 'swiper/css';

function CardEffect() {

    //repo links
  const handleAstaRepoLink = () => {
    window.open('https://github.com/DevMatyuuu/Asta-todo', '_blankFB');
  };
  const handleCloudRepoLink = () => {
    window.open('https://github.com/DevMatyuuu/Cloud-Chase', '_blankFB');
  };


  //demo links
  const handleAstaDemoLink = () => {
    window.open('https://asta-task.vercel.app', '_blankGit');
  };
  const handleCloudDemoLink = () => {
    window.open('https://cloud-chase.vercel.app', '_blankGit');
  };

  return (
    <div className='flex flex-col lg:gap-32'>
        {proj.map((item) => (
          <Card data-aos='fade-right' key={item.id} className='flex mx-auto blur-background h-100 lg:w-[100%] w-[80%] py-10'>
            <CardBody>
              <div className='flex xl:flex-row flex-col mx-auto gap-10 w-[90%]'>
                <div className='absolute left-0 w-[97%] h-96 bg-gradient-to-br lg:mt-0 mt-10  from-slate-100  to-slate-400 rounded-2xl filter blur-3xl opacity-50' /> 
                <Swiper
                effect={'cards'}
                loop={false}
                slidesPerView={'auto'}
                autoplay={true}
                className='lg:w-[65%] lg:mt-8 z-0'
                grabCursor={true}
                cardsEffect={{ slideShadows: false }}
                modules={[EffectCards]}
              >
                {item.images.map((data, index) => (
                  <SwiperSlide key={index} className='flex justify-center'>
                    <img src={data} className='lg:h-80 rounded-xl shadow-xl' />
                  </SwiperSlide>
                ))}
              </Swiper>
                <div className='flex flex-col gap-5 lg:w-[60%] w-[100%] mx-auto text-center z-0'>
                  <p className='font-extrabold lg:text-xl text-sm'>{item.title}</p>
                  <p className='text-justify lg:text-base text-sm mx-auto lg:w-[80%]'>{item.desc}</p>
                  <div className='lg:flex lg:gap-5 xl:mx-16 mx-auto gap-2 grid grid-cols-4 lg:mb-10'>
                  {item.stack.map((stack, index) => (
                    <div key={index} className=''>
                      <Chip variant='outlined' value={stack} className=" border-black lg:px-3 lg:py-2 py-1  lg:text-[10px] text-[7px]" />
                    </div>
                  ))}
                  </div>
                  <div className='flex mx-auto xl:mx-0 text-white lg:text-sm text-xs'>
                    <Card onClick={item.title === 'Cloud Chase' ? handleCloudRepoLink : handleAstaRepoLink} className='flex flex-row lg:ml-16 py-2 px-2 items-center lg:px-3 lg:py-2 lg:gap-2 gap-1 bg-black hover:scale-105 cursor-pointer'>
                      <AiFillGithub size={20} />
                      <p>Github</p>
                    </Card>
                    <Card onClick={item.title === 'Cloud Chase' ? handleCloudDemoLink : handleAstaDemoLink} className='flex flex-row lg:ml-5 ml-3 py-2 px-2 items-center lg:px-3 lg:py-2 lg:gap-2 gap-1 bg-black hover:scale-105 cursor-pointer'>
                      <AiOutlineGlobal size={20}/>
                      <p>Demo</p>
                    </Card>
                  </div>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
  )
}

export default CardEffect