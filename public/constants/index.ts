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

const testimonials: Testimonial[] = [
  {
    testimonial:
      'I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.',
    name: 'Sara Lee',
    designation: 'CFO',
    company: 'Acme Co',
    image: 'https://randomuser.me/api/portraits/women/4.jpg',
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: 'Chris Brown',
    designation: 'COO',
    company: 'DEF Corp',
    image: 'https://randomuser.me/api/portraits/men/5.jpg',
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: 'Lisa Wang',
    designation: 'CTO',
    company: '456 Enterprises',
    image: 'https://randomuser.me/api/portraits/women/6.jpg',
  },
];

const projects: Project[] = [
  {
    name: 'Bon Voyage',
    description:
      'Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'mongodb',
        color: 'green-text-gradient',
      },
      {
        name: 'tailwind',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/projects/carrent.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Job IT',
    description:
      'Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.',
    tags: [
      {
        name: 'react',
        color: 'blue-text-gradient',
      },
      {
        name: 'restapi',
        color: 'green-text-gradient',
      },
      {
        name: 'scss',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/projects/jobit.png',
    source_code_link: 'https://github.com/',
  },
  {
    name: 'Trip Guide',
    description:
      'A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.',
    tags: [
      {
        name: 'nextjs',
        color: 'blue-text-gradient',
      },
      {
        name: 'supabase',
        color: 'green-text-gradient',
      },
      {
        name: 'css',
        color: 'pink-text-gradient',
      },
    ],
    image: '/assets/projects/tripguide.png',
    source_code_link: 'https://github.com/',
  },
];

export { services, technologies, experiences, testimonials, projects };
