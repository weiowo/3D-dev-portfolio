import About from '@/components/About';
import Experience from '@/components/Experience';
import Tech from '@/components/Tech';
import Works from '@/components/Works';
// import Feedbacks from '@/components/Feedbacks';
import Contact from '@/components/Contact';
import StarsCanvas from '@/components/canvas/Stars';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <>
      <div className="relative z-0">
        <Hero />
        <About />
        <Experience />
        <Tech />
        <Works />
        <Contact />
        <StarsCanvas />
      </div>
    </>
  );
}
