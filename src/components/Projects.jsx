import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCards } from 'swiper/modules';
import 'swiper/css/effect-cards';
import 'swiper/css';
import { Typography } from '@material-tailwind/react';
import { Card, CardBody } from "@material-tailwind/react";
import { proj, projImg1, projImg2 } from '../constants';

function Projects() {

  return (
    <section id='Projects' className='h-[200vh] w-auto lg:mt-40'>
      <div>
        <Typography className="font-poppins text-lg font-bold text-center text-slate-600 lg:mb-2">Take a look at some of my</Typography>
        <Typography className='font-poppins text-6xl font-bold text-center uppercase text-black lg:mb-20'>Projects</Typography>
      </div>
      <div className='flex flex-col gap-20'>
        {proj.map((item) => (
          <Card key={item.title} className='flex mx-auto blur-background h-100 w-[90%] py-20'>
            <CardBody>
              <div className='flex mx-auto gap-10 w-[90%]'>
                <div className='absolute top-0 left-0 w-[97%] h-96 bg-gradient-to-br from-slate-100  to-slate-400 rounded-xl filter blur-3xl opacity-75 z-49' />
                {item.title === 'ASTA (A Simple Task Assistant)' 
                ? <Swiper
                effect={'cards'}
                loop={false}
                slidesPerView={'auto'}
                autoplay={true}
                className='lg:w-[65%]'
                grabCursor={true}
                cardsEffect={{ slideShadows: false }}
                modules={[EffectCards]}
              >
                {projImg1.map((data) => (
                  <SwiperSlide key={data.id} className='flex justify-center'>
                    <img src={data.image} className='lg:h-80 rounded-xl shadow-xl' />
                  </SwiperSlide>
                ))}
              </Swiper>
                : <Swiper
                effect={'cards'}
                loop={false}
                slidesPerView={'auto'}
                autoplay={true}
                className='lg:w-[65%]'
                grabCursor={true}
                cardsEffect={{ slideShadows: false }}
                modules={[EffectCards]}
              >
                {projImg2.map((data) => (
                  <SwiperSlide key={data.id} className='flex justify-center'>
                    <img src={data.image} className='lg:h-80 rounded-xl shadow-xl' />
                  </SwiperSlide>
                ))}
              </Swiper>}
                <div className='flex flex-col gap-7 w-[45%] text-center z-50'>
                  <p className='font-extrabold text-lg'>{item.title}</p>
                  <p className='text-justify'>{item.desc}</p>
                </div>
              </div>
            </CardBody>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Projects;
