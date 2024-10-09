"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay } from 'swiper/modules';

const heros = [
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
    image: '/images/hero/1.png'
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
    image: '/images/hero/2.png'
  },
  {
    title: 'Lorem ipsum dolor sit amet.',
    subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
    image: '/images/hero/3.png'
  },
]
const HomeHero = () => {
  return (
    <div className="mx-container my-6 rounded-md lg:rounded-xl overflow-auto">
      <Swiper
        spaceBetween={20}
        slidesPerView={1}
        loop={true} speed={1000}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Autoplay]}
      >
        {
          heros.map((item, index) => (
            <SwiperSlide key={index}>
              <div className='relative h-[30vh] md:h-[50vh] w-full rounded-md lg:rounded-xl overflow-hidden'>
                <div className='absolute flex flex-col justify-end top-0 left-0 bottom-0 right-0 bg-black/20 z-10'>
                  <div className='p-5 max-w-xl'>
                    <h2 className='drop-shadow text-xl md:text-3xl lg:text-4xl text-white font-semibold'>{item.title}</h2>
                    <p className='text-sm md:text-lg text-white drop-shadow'>{item.subtitle}</p>
                  </div>
                </div>
                <Image src={item.image || '/images/products/1.png'} className='w-full h-full object-cover' alt='product-1' fill />
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
    </div>
  )
}

export default HomeHero