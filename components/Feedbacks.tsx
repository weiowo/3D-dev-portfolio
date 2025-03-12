'use client';
import { motion } from 'framer-motion';
import { textVariant } from '../utils/motion';
import SectionWrapper from './wrappers/SectionWrapper';
// import { testimonials } from '@/public/lib/constants';
// import Image from 'next/image';

// interface FeedbackCardProps {
//   index: number;
//   testimonial: string;
//   name: string;
//   designation: string;
//   company: string;
//   image: string;
// }

// interface Testimonial {
//   name: string;
//   testimonial: string;
//   designation: string;
//   company: string;
//   image: string;
// }

// const FeedbackCard: React.FC<FeedbackCardProps> = ({
//   index,
//   testimonial,
//   name,
//   designation,
//   company,
//   image,
// }) => (
//   <motion.div
//     variants={fadeIn('', 'spring', index * 0.5, 0.75)}
//     className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
//   >
//     <p
//       className="
//     text-white
//     font-black text-[48px]"
//     >
//       &quot;
//     </p>

//     <div className="mt-1">
//       <p className="text-white tracking-wider text-[18px]">{testimonial}</p>

//       <div className="mt-7 flex justify-between items-center gap-1">
//         <div className="flex-1 flex flex-col">
//           <p className="text-white font-medium text-[16px]">
//             <span className="blue-gradient">@</span> {name}
//           </p>
//           <p className="mt-1 text-secondary text-[12px]">
//             {designation} of {company}
//           </p>
//         </div>
//         <Image
//           src={image}
//           alt={`feedback_by-${name}`}
//           width={40}
//           height={40}
//           className="w-10 h-10 rounded-full object-cover"
//         />
//       </div>
//     </div>
//   </motion.div>
// );

const Feedbacks: React.FC = () => {
  return (
    <SectionWrapper idName="feedbacks">
      <div className={`mt-12 bg-black-100 rounded-[20px]`}>
        <div className={`bg-tertiary rounded-2xl padding-all min-h-[300px]`}>
          <motion.div variants={textVariant()}>
            <p className="section-sub-text">What others say</p>
            <h2 className="section-head-text">Testimonials.</h2>
          </motion.div>
        </div>
        {/* <div className={`-mt-20 pb-14 padding-x flex flex-wrap gap-7`}>
          {testimonials.map((testimonial, index) => (
            <FeedbackCard
              key={testimonial.name}
              index={index}
              {...testimonial}
            />
          ))}
        </div> */}
      </div>
    </SectionWrapper>
  );
};

export default Feedbacks;
