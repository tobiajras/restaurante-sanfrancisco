'use client';

import useEmblaCarousel from 'embla-carousel-react';

import { useState } from 'react';

import testimonios from '@/data/testimonios';

import StarIcon from '@/components/icons/StarIcon';
import Image from 'next/image';
import SectionTitle from '@/components/SectionTitle';

const TestimoniosSection = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  const [clicked, setClicked] = useState(false);

  return (
    <section
      id='testimoniosSection'
      className='my-10 md:my-20 w-full flex flex-col overflow-hidden'
    >
      <SectionTitle title='Testimonios' />
      <div className='' ref={emblaRef}>
        <div
          onMouseUp={() => setClicked(false)}
          onMouseDown={() => setClicked(true)}
          className={`flex gap-2 sm:gap-3 md:gap-5 max-w-6xl mx-6 sm:mx-8 md:mx-10 ${
            clicked ? 'cursor-grabbing' : 'cursor-grab'
          }`}
        >
          {testimonios?.map((testimonio, index) => (
            <article
              key={index}
              className='bg-color-bg-primary p-6 sm: p-8 md:p-10 rounded-md drop-shadow select-none'
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
      </div>
    </section>
  );
};

export default TestimoniosSection;
