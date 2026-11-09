// Work experience, newest first. Keep facts in sync with the resume.
import type { Entry } from './types';

export const work: Entry[] = [
  {
    id: 'aia-secondment',
    org: 'AIA Singapore',
    role: 'Investment Specialist, Performance and Risk Analysis (secondment)',
    place: 'Singapore',
    period: 'Aug 2026 – now',
    plain:
      'Temporarily moved to the investment team, where I help track how the portfolios are doing and speed up the reporting.',
    details: ['Automate workflows and optimize reporting processes within the investment team.'],
  },
  {
    id: 'aia',
    org: 'AIA Singapore',
    role: 'Actuarial Specialist, Insights and Analytics',
    place: 'Singapore',
    period: 'Jul 2024 – Aug 2026',
    plain:
      'Replaced slow, manual number-crunching with automated pipelines, and dug into claims data to help shape products.',
    details: [
      'Refactored data pipelines from Pandas to Polars, setting modular standards and cutting runtime.',
      'Built a high-throughput Python binary parser to pull projection results directly, bypassing legacy Excel extractions.',
      'Analyzed claims data for statistical insights on product strategy and claims management.',
    ],
  },
  {
    id: 'income',
    org: 'Income Insurance',
    role: 'Actuarial Reporting, Assistant Manager',
    place: 'Singapore',
    period: 'Jul 2022 – Jul 2024',
    plain:
      'Kept the insurer’s financial models and reports running, and helped with a deal that passed longevity risk to a reinsurer.',
    details: [
      'Developed a solution to data quality challenges in long-term care assumption setting.',
      'Supported reinsurance admin and experience monitoring for a first-in-market longevity reinsurance.',
      'Maintained Prophet models and built Power Query workflows, cutting reporting turnaround.',
    ],
  },
  {
    id: 'bnm',
    org: 'Central Bank of Malaysia',
    role: 'Associate Actuarial Analyst',
    place: 'Kuala Lumpur, Malaysia',
    period: 'Jul 2019 – Jul 2022',
    plain:
      'Worked on the regulator’s side: checking that insurers hold enough money to pay claims, and automating how that gets reviewed.',
    details: [
      'Automated supervisory evaluations with Python and Power BI, replacing manual reviews.',
      'Calibrated risk charges and yield curve design as part of a valuation and capital framework review.',
      'Technically assessed Fintech Regulatory Sandbox applicants for Insurtech initiatives.',
    ],
  },
  {
    id: 'goldman',
    org: 'Goldman Sachs',
    role: 'Securities Strategist, Summer Analyst',
    place: 'New York, US',
    period: 'Jun – Aug 2018',
    plain: 'A summer internship on the markets side, building models for how trading volume behaves.',
    details: [
      'Built an autoregressive model of market variables and volume profiles, and enhanced the risk engine for P&L prediction and cross-gamma scenarios.',
    ],
  },
  {
    id: 'umich-tutor',
    org: 'University of Michigan',
    role: 'Tutor and Grader',
    place: 'Michigan, US',
    period: 'Jan 2016 – Apr 2019',
    plain:
      'Tutored Calculus, Differential Equations, Probability and Discrete Mathematics, and graded Linear Algebra, Life Contingencies, Loss Models and Deep Learning.',
  },
];
