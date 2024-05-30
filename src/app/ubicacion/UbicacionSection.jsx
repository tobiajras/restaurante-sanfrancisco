import SectionTitle from '@/components/SectionTitle';

const UbicacionSection = () => {
  return (
    <section id='ubicacionSection' className='my-10 md:my-20'>
      <div>
        <SectionTitle title='Ubicación' />
        <article>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3764.5675292890123!2d-99.16764979999999!3d19.344563800000003!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x85d1ffddf5b25d83%3A0xcfc9334b5ff99051!2sRestaurante%20y%20Cafeter%C3%ADa%20San%20Francisco%20Coyoac%C3%A1n!5e0!3m2!1ses!2sar!4v1717079309892!5m2!1ses!2sar'
            width='600'
            height='450'
            loading='lazy'
            referrerPolicy='no-referrer-when-downgrade'
          ></iframe>
        </article>
      </div>
    </section>
  );
};

export default UbicacionSection;
