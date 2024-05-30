import HomeSection from './inicio/InicioSection';
import NosotrosSection from './nosotros/NosotrosSection';
import ServiciosSection from './servicios/ServiciosSection';
import TestimoniosSection from './testimonios/TestimoniosSection';
import UbicacionSection from './ubicacion/UbicacionSection';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between'>
      <HomeSection />
      <ServiciosSection />
      <TestimoniosSection />
      <NosotrosSection />
      <UbicacionSection />
    </main>
  );
}
