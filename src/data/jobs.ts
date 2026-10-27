export interface Job {
  slug: string;
  title: string;
  location: string;
  description: string;
  aboutChord: string;
  aboutRole: string;
  responsibilities: string[];
  goodFit: string[];
  bonuses: string[];
  salary: string;
  equity: string;
}

export const jobs: Job[] = [];

export function getJob(slug: string): Job | undefined {
  return jobs.find(job => job.slug === slug);
}

export function getAllJobs(): Job[] {
  return jobs;
}
