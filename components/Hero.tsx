'use client';

import { motion } from 'framer-motion';
import ComputersCanvas from './canvas/Computers';
import Image from 'next/image';
import Link from 'next/link';

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[100px] max-w-7xl mx-auto pading-x flex flex-row justify-center items-start gap-5`}
      >
        <div className="px-4">
          <div className={`hero-head-text text-white text-center`}>
            Hi, I&apos;m <span className="text-[#915EFF]">Wei Ting</span>
          </div>
          <p
            className={`hero-sub-text text-white text-center tracking-[0.05em]`}
          >
            I develop web applications, user interfaces, and innovative
            projects,
            <br className="sm:block hidden" /> delivering efficient,
            user-friendly, and high-performance solutions.
          </p>
          <div className="flex items-center justify-center gap-3 mt-3">
            <Link
              className="z-10"
              href="https://github.com/weiowo?tab=repositories"
            >
              <Image
                src="/assets/github.png"
                alt="github-icon"
                width={30}
                height={30}
              />
            </Link>
            <Link
              className="z-10"
              href="https://www.linkedin.com/in/wei-ting-wang-a7543a170/"
            >
              <Image
                src="/assets/linkedin.png"
                alt="linkedin-icon"
                width={25}
                height={25}
              />
            </Link>
          </div>
        </div>
      </div>

      <ComputersCanvas />

      <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: 'loop',
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
