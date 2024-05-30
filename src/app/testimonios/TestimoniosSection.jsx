'use client';

import useEmblaCarousel from 'embla-carousel-react';

import StarIcon from '@/components/icons/StarIcon';
import Image from 'next/image';

const TestimoniosSection = () => {
  const [emblaRef] = useEmblaCarousel({ dragFree: true });

  return (
    <section
      id='testimoniosSection'
      ref={emblaRef}
      className='mt-10 mb-20 md:mt-20 md:mb-40 py-40 w-full flex justify-center bg-color-bg-primary overflow-hidden'
    >
      <div className='flex gap-10 max-w-6xl'>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio1.webp'
              width={40}
              height={40}
              alt='imagen testimonio 1'
            />

            <span className='font-semibold'>
              Ing. Brayan González Hernández
            </span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Excelente lugar, para pasar unos buenos tragos y bailar, lo mejor es
            después de las 10 que llega el cantante de salsa
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio2.webp'
              width={40}
              height={40}
              alt='imagen testimonio 2'
            />

            <span className='font-semibold'>Jacqueline Flores Segovia</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Joya de la cultura mexicana, tiene un tubo en la pista para amenizar
            y que todos lo puedan usar jajaja. Lugar muy chido si te gusta algo
            no típico fresa de coyo, precios justos y Joshua canta los viernes
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio3.webp'
              width={40}
              height={40}
              alt='imagen testimonio 3'
            />

            <span className='font-semibold'>Christian Quiñones</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Buen lugar. El ambiente no falla. Cuándo hay salsa en vivo, ufff, se
            pone muy bien. El famoso bar del Tubo en Coyoacán nunca falla.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio4.webp'
              width={40}
              height={40}
              alt='imagen testimonio 4'
            />

            <span className='font-semibold'>Dalia Reyes G</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Este lugar es perfecto para ir a &quot;charanguear&quot; y pasarla
            con amigos, las cervezas siempre están super frias.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>

        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio5.webp'
              width={40}
              height={40}
              alt='imagen testimonio 5'
            />

            <span className='font-semibold'>Rubén Galicia</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            El mejor ambiente de la zona. Precios accesibles, buenas botanas,
            buenos tragos y un tubo en la pista que siempre causa sensación.
            Super divertido si vas con los amigos y bueno para ir a echar el
            trago.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio6.webp'
              width={40}
              height={40}
              alt='imagen testimonio 6'
            />

            <span className='font-semibold'>Erick Ochoa</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Este lugar en una zona popular de Coyoacan tiene bastante onda, Una
            rocola de las de antes con todo tipo de musica, ademas de que el
            lugar es frecuentado por universitarios debido al bajo costo de las
            cervezas.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio7.webp'
              width={40}
              height={40}
              alt='imagen testimonio 7'
            />

            <span className='font-semibold'>Fernanda Pille</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Las bebidas a precios accesibles, ambiente relajado para ir a
            chelear y bailar un buen rato.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
        <article className='bg-white p-10 rounded-md drop-shadow  '>
          <div className='flex items-center gap-3'>
            <Image
              src='/assets/testimonios/testimonio8.webp'
              width={40}
              height={40}
              alt='imagen testimonio 8'
            />

            <span className='font-semibold'>Pavel VM</span>
          </div>
          <p className='w-[400px] mt-3 font-medium'>
            Venden desayunos y comidas además de cervezas y licores. Los
            alimentos se sirven hasta las 6, después solo tragos.
          </p>
          <div className='flex gap-1.5 mt-2'>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
            <span>
              <StarIcon className='fill-[#fbbc04] w-5 h-5' />
            </span>
          </div>
        </article>
      </div>
    </section>
  );
};

export default TestimoniosSection;
