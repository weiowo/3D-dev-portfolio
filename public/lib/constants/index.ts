interface NavLink {
  id: string;
  title: string;
}

interface Service {
  title: string;
  icon: string;
}

interface Technology {
  name: string;
  icon: string;
}

interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
}

export const navLinks: NavLink[] = [
  {
    id: 'about',
    title: 'About',
  },
  {
    id: 'work',
    title: 'Work',
  },
  {
    id: 'contact',
    title: 'Contact',
  },
];

const services: Service[] = [
  {
    title: 'Frontend Developer',
    icon: '/assets/web.png',
  },
  {
    title: 'Next / React Developer',
    icon: '/assets/mobile.png',
  },
  {
    title: 'Backend Developer',
    icon: '/assets/backend.png',
  },
  {
    title: 'Marketing Specialist',
    icon: '/assets/creator.png',
  },
];

const technologies: Technology[] = [
  {
    name: 'HTML 5',
    icon: '/assets/tech/html.png',
  },
  {
    name: 'CSS 3',
    icon: '/assets/tech/css.png',
  },
  {
    name: 'JavaScript',
    icon: '/assets/tech/javascript.png',
  },
  {
    name: 'TypeScript',
    icon: '/assets/tech/typescript.png',
  },
  {
    name: 'React JS',
    icon: '/assets/tech/reactjs.png',
  },
  {
    name: 'Redux Toolkit',
    icon: '/assets/tech/redux.png',
  },
  {
    name: 'Tailwind CSS',
    icon: '/assets/tech/tailwind.png',
  },
  {
    name: 'Node JS',
    icon: '/assets/tech/nodejs.png',
  },
  {
    name: 'MongoDB',
    icon: '/assets/tech/mongodb.png',
  },
  {
    name: 'Next JS',
    icon: '/assets/tech/threejs.svg',
  },
  {
    name: 'git',
    icon: '/assets/tech/git.png',
  },
  {
    name: 'figma',
    icon: '/assets/tech/figma.png',
  },
  {
    name: 'docker',
    icon: '/assets/tech/docker.png',
  },
];

const experiences: Experience[] = [
  {
    title: 'Frontend Developer',
    company_name: 'New Digit',
    icon: '/assets/company/letter-n.png',
    iconBg: '#DDDDDD',
    date: 'July 2024 - March 2025',
    points: [
      'Completed multiple projects independently and collaborated with FE, BE, and Design teams.',
      'Built crypto wallet PWA, corporate branding websites, and game websites using Next.js.',
      'Implemented RWD and visually appealing designs with Tailwind CSS and multi-lingualization with i18n.',
      'Integrated animation tools such as GSAP, AOS, and CSS animations to deliver dynamic web experiences.',
      'Contributed to improving website SEO performance through optimization strategies.',
    ],
  },
  {
    title: 'Frontend Developer',
    company_name: 'Radex Markets',
    icon: '/assets/company/letter-r.png',
    iconBg: '#DDDDDD',
    date: 'October 2022 - May 2024',
    points: [
      'Exclusively in charge of FE engineering, collaborated with BE engineers and Art Dept.',
      "Developed CRM system's entire Frontend part, encompassing Multiple Management pages, Lottery Game for international exhibitions and Mailing System.",
      "Carried out Official Website's new features for new products and activity launches.",
      'Enhanced Official Website SEO Performance, elevating Lighthouse score from 70 to 100.',
      'Developed Backend skills including API creation, server development, and data management from databases.',
    ],
  },
  {
    title: 'Marketing Specialist',
    company_name: 'TEAMA Technology',
    icon: '/assets/company/letter-t.png',
    iconBg: '#DDDDDD',
    date: 'July 2019 - September 2021',
    points: [
      'Website Management, Social Media Operation, EDM Design, Video Editing, Activity Planning, Translation, Content Creating, etc.',
      'Communicated with Engineers, PMs and colleagues from headquarter in USA to analyze and discuss the optimization method of SEO, Keyword Ads and GDN Ads performance.',
      'Held activities with more than one hundred participants, got over 200% leads compared to the previous year.',
    ],
  },
];

// const testimonials: Testimonial[] = [
//   {
//     testimonial:
//       'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
//     name: 'Sara Lee',
//     designation: 'CFO',
//     company: 'Acme Co',
//     image: 'https://randomuser.me/api/portraits/women/4.jpg',
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: 'Chris Brown',
//     designation: 'COO',
//     company: 'DEF Corp',
//     image: 'https://randomuser.me/api/portraits/men/5.jpg',
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: 'Lisa Wang',
//     designation: 'CTO',
//     company: '456 Enterprises',
//     image: 'https://randomuser.me/api/portraits/women/6.jpg',
//   },
// ];

const projects: Project[] = [
  {
    name: 'Bon Voyage',
    description:
      'A comprehensive platform designed for travelers to discoverew destinations, plan itineraries,write articles, ensuring a seamless and enriched exploration experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-gradient',
      },
      {
        name: 'styled-component',
        color: 'green-pink-gradient',
      },
      {
        name: 'firebase',
        color: 'blue-gradient',
      },
      {
        name: 'google-map-api',
        color: 'green-pink-gradient',
      },
    ],
    image: '/assets/projects/bon-voyage.webp',
    source_code_link: 'https://bonvoyage-f5e7d.web.app/',
  },
  {
    name: 'WanderWords',
    description:
      'A dynamic blog platform where creators can share their unique ideas, experiences. Whether it’s personal reflections or technical discussions, this space empowers you to inspire.',
    tags: [
      {
        name: 'next',
        color: 'blue-gradient',
      },
      {
        name: 'typescript',
        color: 'green-pink-gradient',
      },
      {
        name: 'tailwind',
        color: 'blue-gradient',
      },
      {
        name: 'node.js',
        color: 'green-pink-gradient',
      },
      {
        name: 'express',
        color: 'blue-gradient',
      },
      {
        name: 'mongoDB',
        color: 'green-pink-gradient',
      },
    ],
    image: '/assets/projects/wanderwords.png',
    source_code_link: 'https://github.com/weiowo/WanderWords',
  },
  {
    name: 'Kingcard - Crypto Wallet',
    description:
      ' A PWA for managing crypto assets, enabling users to securely store, send, and receive digital currencies, and access their wallets with an intuitive and user-friendly interface.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-gradient',
      },
      {
        name: 'zustand',
        color: 'green-pink-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-gradient',
      },
      {
        name: 'i18n',
        color: 'green-pink-gradient',
      },
      {
        name: 'react-hook-form',
        color: 'blue-gradient',
      },
    ],
    image: '/assets/projects/kingcard.png',
    source_code_link: 'https://kingcard.vip/en-US/download',
  },
  {
    name: 'Radex Markets Website',
    description:
      'A comprehensive Forex website that offers trending news, detailed product intros, educational resources, and exciting bonus activities to enhance the trading experience.',
    tags: [
      {
        name: 'react',
        color: 'blue-gradient',
      },
      {
        name: 'javascript',
        color: 'green-pink-gradient',
      },
      {
        name: 'css',
        color: 'blue-gradient',
      },
      {
        name: 'aos',
        color: 'green-pink-gradient',
      },
    ],
    image: '/assets/projects/radex-markets.png',
    source_code_link: 'https://www.radexmarkets.com/',
  },
  {
    name: 'ChainStar',
    description:
      'A dynamic website showcasing innovative Web3 solutions, featuring company and product overviews while providing insights for investors, and tech enthusiasts.',
    tags: [
      {
        name: 'next.js',
        color: 'blue-gradient',
      },
      {
        name: 'tailwind',
        color: 'green-pink-gradient',
      },
      {
        name: 'emailjs',
        color: 'blue-gradient',
      },
      {
        name: 'i18n',
        color: 'green-pink-gradient',
      },
      {
        name: 'swiper',
        color: 'blue-gradient',
      },
    ],
    image: '/assets/projects/chain-star.png',
    source_code_link: 'https://chainstar.cloud/en-US',
  },
  {
    name: 'Xglobal',
    description:
      'A modern website showcasing innovative iGaming solutions, featuring product overviews, gaming demos and resource downloads.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-gradient',
      },
      {
        name: 'GSAP',
        color: 'green-pink-gradient',
      },
      {
        name: 'typescript',
        color: 'blue-gradient',
      },
      {
        name: 'i18n',
        color: 'green-pink-gradient',
      },
      {
        name: 'react-hook-form',
        color: 'blue-gradient',
      },
    ],
    image: '/assets/projects/xglobal.png',
    source_code_link: 'https://xg.io/en-US',
  },
  {
    name: 'Stylish',
    description:
      'An advanced e-commerce website for fashionable outfits, offering a seamless shopping experience with a personalized recommendations and payment options.',
    tags: [
      {
        name: 'react',
        color: 'blue-gradient',
      },
      {
        name: 'css',
        color: 'green-pink-gradient',
      },
      {
        name: 'tap-pay',
        color: 'blue-gradient',
      },
      {
        name: 'socket.io',
        color: 'green-pink-gradient',
      },
      {
        name: 'seo',
        color: 'blue-gradient',
      },
    ],
    image: '/assets/projects/stylish.png',
    source_code_link:
      'https://drive.google.com/drive/folders/1i9Jn7iwutKez-RoHCD33uOdl84PPPMsg?usp=drive_link',
  },
];

export { services, technologies, experiences, projects };
