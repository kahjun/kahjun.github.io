// All the wording on the site lives here (except work and education entries: see work.ts, education.ts).
// To change what the site says, edit this file. You should not need to touch components.

export const profile = {
  name: 'Kah Jun Lim',
  credentials: 'FSA · CERA · FRM',
  tagline: 'Maths, finance and code, for turning data into insight and busywork into automation.',
  blurb: 'Actuary in Singapore. Studying computer science at Georgia Tech.',
  // Placeholder for now. Replace the file in /public (keep the name, or update src here).
  avatar: { src: '/avatar-placeholder.svg', alt: 'Cartoon avatar of Kah Jun (placeholder)' },
  buttons: {
    primary: { label: 'See my work', href: '#work' },
    secondary: { label: 'Say hi', href: '#contact' },
  },
};

// Slim sticky bar that appears below the hero.
export const nav = {
  links: [
    { label: 'Work', href: '#work' },
    { label: 'Education', href: '#education' },
    { label: 'Contact', href: '#contact' },
  ],
};

export const about = {
  heading: 'The short version',
  paragraphs: [
    'Actuaries put numbers on things that might happen: how long people live, how much claims will cost, how much money to hold in reserve. That has been my day job for seven years, first at Malaysia’s central bank, then at two insurers in Singapore.',
    'The parts I enjoy most are analysing data and automating the tedious bits, so I kept writing code to make the work faster and less error-prone. That got me curious about what’s underneath it all, so I’m doing a master’s in computer science, and my current job is in an investment team. I like the overlap between these fields.',
  ],
};

// At-a-glance chart: two timelines drawn to scale, work on the left and education on the right.
// Names and years only. Dates are YYYY-MM; leave `end` out for "ongoing". `point: true` draws a
// dot instead of a bar (for qualifications). Each row links to its full entry (ids in work.ts /
// education.ts). Keep these dates in line with the entries' `period` text.
type Span = {
  label: string;
  years: string; // text shown under the name
  start: string;
  end?: string;
  href: string;
  point?: boolean;
};

export const overview = {
  heading: 'At a glance',
  workTitle: 'Work',
  educationTitle: 'Education',
  nowLabel: 'Now',
  toolsTitle: 'Go-to tools',
  tools: 'Python · SQL · R · C++',
  work: [
    { label: 'AIA Singapore', years: '2024 – now', start: '2024-07', href: '#aia-secondment' },
    { label: 'Income Insurance', years: '2022 – 2024', start: '2022-07', end: '2024-07', href: '#income' },
    { label: 'Central Bank of Malaysia', years: '2019 – 2022', start: '2019-07', end: '2022-07', href: '#bnm' },
    { label: 'Goldman Sachs', years: '2018', start: '2018-06', end: '2018-08', href: '#goldman' },
  ] as Span[],
  education: [
    { label: 'Georgia Tech', years: '2025 – 2027', start: '2025-08', end: '2027-08', href: '#georgia-tech' },
    { label: 'FRM', years: '2025', start: '2025-06', point: true, href: '#frm' },
    { label: 'FSA', years: '2021', start: '2021-12', point: true, href: '#fsa' },
    { label: 'CERA', years: '2021', start: '2021-07', point: true, href: '#cera' },
    { label: 'University of Michigan', years: '2015 – 2019', start: '2015-09', end: '2019-05', href: '#umich' },
  ] as Span[],
};

// Section wording. The entries themselves live in work.ts and education.ts.
export const workSection = {
  heading: 'Work experience',
  intro: 'Newest first. Each role starts with a plain-English line, with the technical detail underneath.',
};

export const educationSection = {
  heading: 'Education',
  intro: 'Degrees and professional qualifications, newest first.',
  degreesTitle: 'Degrees',
  qualificationsTitle: 'Professional qualifications',
};

export const contact = {
  heading: 'Say hi',
  text: 'Happy to chat about actuarial work, finance, software, or how to get started on any of them.',
  email: 'kahjun008@gmail.com',
  links: [{ label: 'GitHub', href: 'https://github.com/kahjun' }],
  footer: 'Built with Astro.',
};
