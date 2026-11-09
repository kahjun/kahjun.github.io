// Shape shared by work and education entries.
export type Entry = {
  id?: string; // anchor, so the overview can link here
  org: string; // company, school, or credential
  role: string; // job title, degree, or designation
  place?: string;
  period: string;
  plain: string; // one-line plain-English summary
  details?: string[]; // technical bullets, shown in a dropdown
};
