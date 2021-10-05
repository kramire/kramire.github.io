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
  p1: `I've been working as a Fullstack Developer for about 3 years, with a strong focus on the frontend.`,
  p2: `Most of my work has been with React, Typescript, various state management, Styled Components, and Semantic UI.`,
  p3: `When I work, I strive to write clean code, enforce best practices, and optimize performance.`,
  p4: `My background also includes work in Data Analytics, and Management. This has sharpened my critical
            thinking skills, and taught me how to clearly present ideas.`,
  // p4: `What makes me unique is my ability to collaborate with both business
  //           and technical teams. I bring the logical mindset of a coder, plus the
  //           soft skills of a business professional.`,
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'runningLog.png',
    title: 'Running Log + Running Log 2.0',
    info: `Track your runs, and let Running Log predict if you're at risk of injury.`,
    info2:
      'V1 built with: React, Redux, Express, MongoDB. V2 is actively being built with: Typescript, React Query, Postgres',
    url: '',
    repo: 'https://github.com/kramire/running-log', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'lunchPicker.png',
    title: 'Lunch Picker',
    info: `Can't decide where to grab lunch? Get a random pick! See the restaurant reviews, photos, and contact info.`,
    info2: 'Build with React, Typescript, Serverless Functions, Styled Components, and Jest',
    url: 'https://xenodochial-lewin-8ab7a8.netlify.app/',
    repo: 'https://github.com/kramire/lunch-picker-2.0', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'jukbox.png',
    title: 'JUKBOX',
    info: 'Create a digital jukbox, and have listeners add songs to the queue via their phone.',
    info2: 'Contributed to this group project: Postgres DB, WebSockets, Project Management.',
    url: '',
    repo: 'https://github.com/Do0oV/jukbox-fe', // if no repo, the button will not show up
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
