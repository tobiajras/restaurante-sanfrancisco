'use client';

import useEmblaCarousel from 'embla-carousel-react';

import { useState } from 'react';

import { motion } from 'framer-motion';

import testimonios from '@/data/testimonios.json';

import StarIcon from '@/components/icons/StarIcon';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

const testimoniosVariants = {
  inactive: {
    opacity: 0,
    y: 30,
  },
  active: {
    opacity: 1,
    y: 0,
    transition: {
      ease: 'easeOut',
      duration: 0.3,
    },
  },
};

const TestimoniosSection = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const [clicked, setClicked] = useState(false);

  return (
    <section
      id='testimoniosSection'
      className='my-10 md:my-14 lg:my-20 w-full flex flex-col overflow-hidden'
    >
      <SectionTitle title='Testimonios' />
      <motion.div
        variants={testimoniosVariants}
        initial='inactive'
        whileInView='active'
        viewport={{
          once: true,
          margin: '0px 0px -300px 0px',
        }}
        className='flex justify-center'
        ref={emblaRef}
      >
        <div
          onMouseUp={() => setClicked(false)}
          onMouseDown={() => setClicked(true)}
          className={`flex gap-2 sm:gap-3 md:gap-5 max-w-6xl w-full px-4 sm:px-6 md:px-8 lg:px-10 ${
            clicked ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {testimonios?.map((testimonio, index) => (
            <article
              key={index}
              className='bg-color-bg-primary p-6 sm:p-8 md:p-10 rounded-md drop-shadow select-none'
            >
              <div className='flex items-center gap-3'>
                <Image
                  className='w-6 md:w-10 '
                  src={testimonio.image}
                  width={40}
                  height={40}
                  alt={`imagen testimonio ${index + 1}`}
                />
                <span className='font-semibold text-xs sm:text-sm md:text-base text-color-title-light'>
                  {testimonio.name}
                </span>
              </div>
              <p className='text-color-text-light w-[200px] sm:w-[300px] md:w-[400px] text-xs sm:text-sm md:text-base  mt-3'>
                {testimonio.text}
              </p>
              <div className='flex gap-1 sm:gap-1.5 mt-2'>
                {Array.from({ length: testimonio.rating }).map(
                  (_, starIndex) => (
                    <span key={starIndex}>
                      <StarIcon className='fill-[#fbbc04] w-4 h-4 sm:w-5 sm:h-5' />
                    </span>
                  )
                )}
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default TestimoniosSection;
