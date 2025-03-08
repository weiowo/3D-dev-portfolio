'use client';

import BallCanvas from './canvas/Ball';
import SectionWrapper from './wrappers/SectionWrapper';
import { technologies } from '@/public/lib/constants';

interface Technology {
  name: string;
  icon: string;
}

const Tech: React.FC = () => {
  return (
    <SectionWrapper idName="">
      <div className="flex flex-row flex-wrap justify-center gap-10">
        {technologies.map((technology: Technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
};

export default Tech;
