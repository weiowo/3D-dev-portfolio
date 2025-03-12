import { motion } from 'framer-motion';
import { staggerContainer } from '@/utils/motion';
import { ReactNode } from 'react';
import cn from '@/public/lib/cn';
interface SectionWrapperProps {
  children: ReactNode;
  idName: string;
  className?: string;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  idName,
  className,
}) => {
  return (
    <motion.section
      variants={staggerContainer()}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.25 }}
      className={cn(
        'sm:px-16 px-5 sm:py-16 py-10 max-w-7xl mx-auto relative z-0',
        className,
      )}
    >
      <span className="hash-span" id={idName}>
        &nbsp;
      </span>
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
