'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';

import { useState } from 'react';

import SectionTitle from '@/components/SectionTitle';
import Image from 'next/image';

const NosotrosSection = () => {
  const autoplayOptions = {
    delay: 4000,
    stopOnInteraction: false,
  };

  const [emblaRef] = useEmblaCarousel({ loop: true }, [
    Autoplay(autoplayOptions),
  ]);

  const [clicked, setClicked] = useState(false);

  return (
    <section id='nosotrosSection' className='my-10 md:my-20'>
      <div>
        <SectionTitle title='Nosotros' />
        <div className='flex items-center gap-10'>
          <article>
            <h4 className='text-3xl text-color-secondary font-semibold'>
              Somos{' '}
              <span className='font-bold text-color-primary'>Comunidad</span>
            </h4>
            <div className='w-[500px] text-lg flex flex-col gap-3 mt-5'>
              <p>
                Fundado en 1997, hemos crecido desde un pequeño local hasta
                convertirnos en un referente en lo que somos hoy, siempre
                manteniendo nuestro compromiso con la calidad y el servicio.
              </p>
              <p>
                En <span>San Francisco</span> cada visita es una nueva
                experiencia. Ofrecemos una variedad de eventos especiales, como
                noches temáticas, degustaciones de vinos y clases de cocina,
                para que siempre haya algo nuevo y emocionante que descubrir
              </p>
            </div>
          </article>
          <article
            ref={emblaRef}
            onMouseUp={() => setClicked(false)}
            onMouseDown={() => setClicked(true)}
            className={`overflow-hidden ${
              clicked ? 'cursor-grabbing' : 'cursor-grab'
            }`}
          >
            <div className='flex w-[400px] h-[500px]'>
              <div className='flex-[0_0_100%] mx-5'>
                <Image
                  className='object-contain rounded-xl'
                  src='/assets/nosotros/nosotros-1.webp'
                  width={400}
                  height={500}
                  alt='imagen nosotros 1'
                />
              </div>
              <div className='flex-[0_0_100%] mx-5'>
                <Image
                  className='object-contain rounded-xl'
                  src='/assets/nosotros/nosotros-2.webp'
                  width={400}
                  height={500}
                  alt='imagen nosotros 2'
                />
              </div>
              <div className='flex-[0_0_100%] mx-5'>
                <Image
                  className='object-contain rounded-xl'
                  src='/assets/nosotros/nosotros-3.webp'
                  width={400}
                  height={500}
                  alt='imagen nosotros 3'
                />
              </div>
              <div className='flex-[0_0_100%] mx-5'>
                <Image
                  className='object-contain rounded-xl'
                  src='/assets/nosotros/nosotros-4.webp'
                  width={400}
                  height={500}
                  alt='imagen nosotros 4'
                />
              </div>
              <div className='flex-[0_0_100%] mx-5'>
                <Image
                  className='object-contain rounded-xl'
                  src='/assets/nosotros/nosotros-5.webp'
                  width={400}
                  height={500}
                  alt='imagen nosotros 5'
                />
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default NosotrosSection;