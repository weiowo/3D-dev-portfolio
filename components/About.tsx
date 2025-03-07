'use client';
import { motion } from 'framer-motion';
import SectionWrapper from './wrappers/SectionWrapper';
import { services } from '@/public/constants';
import Image from 'next/image';
import Tilt from 'react-parallax-tilt';
import { fadeIn, textVariant } from '../utils/motion';

interface ServiceCardProps {
  index: number;
  title: string;
  icon: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full parallax-effect" perspective={400}>
    <motion.div
      variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div className="cursor-pointer bg-black rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
        <Image
          src={icon}
          alt="web-development"
          width={64}
          height={64}
          className="object-contain"
        />
        <h3 className="text-white tracking-[0.05rem] text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About: React.FC = () => {
  return (
    <SectionWrapper idName="about">
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">Introduction</p>
        <h2 className="section-head-text">Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[20px] max-w-3xl leading-[30px]"
      >
        I'm a skilled software developer with experience in{' '}
        <strong>TypeScript</strong> and <strong>Javascript</strong>, expertising
        in frameworks like <strong>Next.js, React and Node.js</strong>. I'm a
        proactive, and detail-oriented software engineer with cross-field
        experiences in digital marketing, an open-minded self-learner who
        embraces challenges and enjoys problem-solving, a team player who's also
        good at independent work.
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default About;
