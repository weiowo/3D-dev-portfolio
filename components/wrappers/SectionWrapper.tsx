import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { ReactNode } from 'react';
interface SectionWrapperProps {
  children: ReactNode;
  idName: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  idName,
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className="padding-all max-w-7xl mx-auto relative z-0"
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
