import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: `Hi there, I'm`,
  name: 'Katie Ramiré',
  subtitle: 'a Full Stack Developer',
  cta: '',
  location: 'Vienna, Austria',
  home: 'New York / New Jersey',
};

// ABOUT DATA
export const aboutData = {
  img: 'vienna.jpg',
  paragraphOne: `I have a strong passion for web development, and strive to write
            clean code, enforce best practices, and optimize performance. As an
            individual, I am incredibly driven. I love learning, have a strong
            work ethic, and my mindset is always solution-driven.`,
  paragraphTwo: `My background also includes work in Data Analytics, Business
            Intelligence, and Management. This has sharpened my critical
            thinking skills, and taught me how to clearly present ideas.`,
  paragraphThree: `What makes me unique is my ability to collaborate with both business
            and technical teams. I bring the logical mindset of a coder, plus the
            soft skills of a business professional.`,
  resume: 'https://www.resumemaker.online/es.php', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: '',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/kramire/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/kramire',
    },
  ],
};
