import dynamic from 'next/dynamic';
import HeaderTop from "@/components/HeaderTop";
import Hero from "@/components/Hero";
import Gallery from '@/components/Gallery';
import Slider from '@/components/Slider';
import { SliderData } from '../components/SliderData';
import Footer from '@/components/Footer';
const DynamicServices = dynamic(() => import('@/components/Services'), { ssr: false });

const Home = () => {
  return (
    <>
      <HeaderTop />
      <Hero />
      <DynamicServices />
      <Gallery />
      <Slider slides={SliderData} />
      <Footer />
    </>
  );
};

export default Home;
