"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
import { Autoplay, Pagination } from 'swiper/modules';
import { StarIcon } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/1.jpg',
      rating: 4
    },
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/2.jpg',
      rating: 4
    },
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/3.jpg',
      rating: 4
    },
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/4.jpg',
      rating: 4
    },
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/5.jpg',
      rating: 4
    },
    {
      name: 'Siapa Nama Orangya',
      message: 'Kata katanya Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut dicta ipsam rerum animi tempora, repudiandae obcaecati harum cum iste quos.',
      image: '/images/users/6.jpg',
      rating: 4
    },
  ]
  return (
    <section className='bg-slate-100 py-6 md:py-12'>
      <div className="max-w-3xl mx-auto">
        <div>
          <h2 className='text-xl md:text-2xl'>Kata Mereka</h2>
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates, nihil.  </p>
        </div>
        <div className='mt-5'>
          <Swiper
            spaceBetween={20}
            slidesPerView={2}
            loop={true} speed={1000}
            pagination={{
              clickable:true
            }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay, Pagination]}
          >
            {
              testimonials.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className="flex flex-col bg-white p-4 rounded-lg">
                    <div className='relative h-32 w-32 rounded-xl overflow-hidden'>
                      <Image src={item.image || '/images/products/1.png'} className='w-full h-full object-cover' alt='product-1' fill />
                    </div>
                    <div className='mt-3'>
                      <h2 className='text-xl'>{ item.name}</h2>
                      <div className='flex items-center gap-1'>
                        <StarIcon className='h-4 w-4 text-orange-400' />
                        <StarIcon className='h-4 w-4 text-orange-400' />
                        <StarIcon className='h-4 w-4 text-orange-400' />
                        <StarIcon className='h-4 w-4 text-orange-400' />
                      </div>
                      <div>
                        <p className='text-sm italic'>
                          {item.message}
                        </p>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))
            }
          </Swiper>
        </div>
      </div>
    </section>
  )
}

export default Testimonials