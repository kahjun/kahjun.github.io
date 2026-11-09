// Education and professional qualifications, newest first.
// Add detail here freely (courses, projects, exam names): it all shows in the dropdowns.
import type { Entry } from './types';

export const degrees: Entry[] = [
  {
    id: 'georgia-tech',
    org: 'Georgia Tech',
    role: 'M.S. Computer Science (Computing Systems), part-time online',
    place: 'Atlanta, US (online)',
    period: 'Aug 2025 – expected Aug 2027',
    plain:
      'Learning how computers actually work under the hood: operating systems, networks, security and quantum computing.',
    details: [
      'GPA 4.00/4.00 so far.',
      'Done: Intro to OS, Intro to Quantum Computing, Advanced OS, Network Science, Computer Networks.',
      'This term: Information Security Lab (binary exploitation) and High-Dimensional Data Analytics.',
    ],
  },
  {
    id: 'umich',
    org: 'University of Michigan',
    role: 'B.S. quadruple major: Actuarial Mathematics, Computer Science, Data Science, Statistics',
    place: 'Michigan, US',
    period: 'Sep 2015 – May 2019',
    plain: 'Studied maths and computing side by side, with a minor in Complex Systems.',
    details: [
      'GPA 3.87/4.00. Minor in Complex Systems.',
      'Otto C. Ritcher Memorial Prize (2019), for the graduating senior with the greatest achievement in actuarial mathematics.',
      'D.W. Simpson Award (2017), for outstanding academic and professional accomplishments of actuarial students.',
      'Studied on a Kijang Scholarship, a full-tuition scholarship from the Central Bank of Malaysia (2014–19).',
    ],
  },
];

export const qualifications: Entry[] = [
  {
    id: 'frm',
    org: 'FRM',
    role: 'Financial Risk Manager',
    period: 'Jun 2025',
    plain: 'A global certification for financial risk professionals.',
  },
  {
    id: 'fsa',
    org: 'FSA',
    role: 'Fellow of the Society of Actuaries, Quantitative Finance and Investment track',
    period: 'Dec 2021',
    plain:
      'The top professional qualification for actuaries, earned by passing a long series of exams in maths, finance and risk.',
  },
  {
    id: 'cera',
    org: 'CERA',
    role: 'Chartered Enterprise Risk Analyst',
    period: 'Jul 2021',
    plain: 'A credential in enterprise risk management: spotting and managing the risks a whole company faces.',
  },
];
