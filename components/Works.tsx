'use client';
import React from 'react';
import Tilt from 'react-parallax-tilt';
import { projects } from '@/public/lib/constants';
import SectionWrapper from './wrappers/SectionWrapper';
import Image from 'next/image';
import Link from 'next/link';

interface Tag {
  name: string;
  color: string;
}

interface Project {
  name: string;
  description: string;
  tags: Tag[];
  image: string;
  source_code_link: string;
}

interface ProjectCardProps extends Project {
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  name,
  description,
  tags,
  image,
  source_code_link,
}) => {
  return (
    <Tilt
      scale={1}
      transitionSpeed={450}
      tiltMaxAngleX={20}
      className="shadow-md shadow-[#86868640] border-[2px] border-[#202020] p-5 h-[470px] rounded-2xl sm:w-[360px] w-full"
    >
      <div>
        <Link href={source_code_link} className="">
          <div className="relative w-full h-[175px]">
            <Image
              src={image}
              alt="project_image"
              width={300}
              height={200}
              className="w-full h-full object-cover rounded-lg"
            />
          </div>

          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[17px]">{description}</p>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <div
                key={`${name}-${tag.name}`}
                className={`px-3 py-[2px] rounded text-black text-[15px] ${tag.color}`}
              >
                #{tag.name}
              </div>
            ))}
          </div>
        </Link>
      </div>
    </Tilt>
  );
};

const Works: React.FC = () => {
  return (
    <SectionWrapper idName="work">
      <div>
        <p className="section-sub-text">My work</p>
        <h2 className="section-head-text">Projects.</h2>
      </div>

      <div className="w-full flex">
        <p
          // variants={fadeIn('', '', 0.1, 1)}
          className="mt-3 text-secondary text-[20px] max-w-3xl leading-[30px] "
        >
          Following projects showcase my skills and experience through examples
          of my work. Each project is briefly described with links to code
          repositories and live demos in it. It reflects my ability to solve
          complex problems, work with different technologies, and manage
          projects effectively.
        </p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Works;
