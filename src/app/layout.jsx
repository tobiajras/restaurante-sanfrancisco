import { Poppins } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const poppins = Poppins({
  weight: ['400', '500', '600', '700', '800', '900'],
  subsets: ['latin'],
});

export const metadata = {
  title: 'Restaurante San Francisco - Zompantitla 7, Coyoacán',
  description:
    'Con más de 20 años de experiencia, nos dedicamos con pasión a ofrecer experiencias culinarias únicas y a crear momentos inolvidables',
};

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`text-color-text ${poppins.className}`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
