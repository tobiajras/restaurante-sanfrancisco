'use client';

import { motion } from 'framer-motion';

import Image from 'next/image';

import BarIcon from '@/components/icons/BarIcon';
import CafeteriaIcon from '@/components/icons/CafeteriaIcon';
import RestaurantIcon from '@/components/icons/RestaurantIcon';
import SectionTitle from '@/components/SectionTitle';

import serviciosData from '@/data/servicios.json';

const iconComponents = {
  BarIcon: BarIcon,
  CafeteriaIcon: CafeteriaIcon,
  RestaurantIcon: RestaurantIcon,
};

const serviciosVariants = {
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

const ServiciosSection = () => {
  return (
    <section id='serviciosSection' className='my-10 md:my-14 lg:my-20'>
      <div className='flex flex-col mx-4 sm:mx-6 md:mx-8 lg:mx-10'>
        <SectionTitle title='Servicios' />
        <div className='flex flex-col gap-8 sm:gap-20'>
          {serviciosData.map((servicio, index) => {
            const IconComponent = iconComponents[servicio.icon];
            return (
              <motion.article
                variants={serviciosVariants}
                initial='inactive'
                whileInView='active'
                viewport={{
                  once: true,
                  margin: '0px 0px -300px 0px',
                }}
                key={index}
                className='flex items-center gap-3 sm:gap-8 md:gap-16'
              >
                {index % 2 === 0 ? (
                  <>
                    <div>
                      <div className='flex items-center gap-2 md:gap-3 mb-3'>
                        <div className='bg-color-primary p-2 md:p-3 rounded-full'>
                          <IconComponent className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                        </div>
                        <h3 className='sm:text-lg md:text-2xl font-semibold text-color-secondary'>
                          {servicio.title}
                        </h3>
                      </div>
                      <div className='flex flex-col gap-2 text-xs sm:text-base lg:text-lg font-medium w-[170px] sm:w-[300px] lg:w-[500px] xl:w-[600px]'>
                        {servicio.description.map((desc, descIndex) => (
                          <p key={descIndex}>{desc}</p>
                        ))}
                      </div>
                    </div>
                    <div>
                      <Image
                        className='w-[120px] sm:w-[250px] lg:w-[320px] xl:w-[350px] rounded-md sm:rounded-2xl'
                        src={servicio.image}
                        width={324}
                        height={324}
                        alt={`servicio de ${servicio.title.toLowerCase()} imagen`}
                      />
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <Image
                        className='w-[120px] sm:w-[250px] lg:w-[320px] xl:w-[350px] rounded-md sm:rounded-2xl'
                        src={servicio.image}
                        width={324}
                        height={324}
                        alt={`servicio de ${servicio.title.toLowerCase()} imagen`}
                      />
                    </div>
                    <div>
                      <div className='flex items-center gap-2 md:gap-3 mb-3'>
                        <div className='bg-color-primary p-2 md:p-3 rounded-full'>
                          <IconComponent className='w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6' />
                        </div>
                        <h3 className='sm:text-lg md:text-2xl font-semibold text-color-secondary'>
                          {servicio.title}
                        </h3>
                      </div>
                      <div className='flex flex-col gap-2 text-xs sm:text-base lg:text-lg font-medium w-[170px] sm:w-[300px] lg:w-[500px]'>
                        {servicio.description.map((desc, descIndex) => (
                          <p key={descIndex}>{desc}</p>
                        ))}
                      </div>
                    </div>
                  </>
                )}
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServiciosSection;
