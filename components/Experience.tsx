'use client';

import React from 'react';
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import { motion } from 'framer-motion';
import 'react-vertical-timeline-component/style.min.css';
import { experiences } from '@/public/lib/constants';
import SectionWrapper from './wrappers/SectionWrapper';
import { textVariant } from '../utils/motion';
import Image from 'next/image';

interface ExperiencePoint {
  title: string;
  company_name: string;
  date: string;
  points: string[];
  icon: string;
  iconBg: string;
}

interface ExperienceCardProps {
  experience: ExperiencePoint;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: '#181818',
        color: '#fff',
        border: '1px solid',
        borderColor: ' #454545',
        borderRadius: '20px',
        marginRight:0,
        boxShadow:
          '0 4px 6px -1px rgba(134, 134, 134, 0.25), 0 2px 4px -2px rgba(134, 134, 134, 0.25)',
      }}
      contentArrowStyle={{
        borderRight: '10px solid  #b6b6b6',
      }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          <Image
            src={experience.icon}
            alt={experience.company_name}
            width={300}
            height={300}
            className="object-contain"
          />
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] tracking-[0.05em] font-bold">
          {experience.title}
        </h3>
        <p
          className="text-secondary text-[20px] tracking-[0.05em] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[16px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience: React.FC = () => {
  return (
    <SectionWrapper idName="experience" className="px-3">
      <motion.div variants={textVariant()}>
        <p className={`section-sub-text text-center`}>
          What I have done so far
        </p>
        <h2 className={`section-head-text text-center`}>Work Experience.</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </SectionWrapper>
  );
};

export default Experience;
