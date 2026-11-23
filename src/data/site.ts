export interface Book {
  id: string;
  title: string;
  author?: string;
  url: string;
  status: 'reading' | 'read' | 'next';
}

export interface Project {
  id: string;
  name: string;
  description: string;
  url: string;
  tags: string[];
}

export interface Experience {
  id: string;
  role: string;
  org: string;
  period: string;
  bullets: string[];
  topics: string[];
}

const email = 'svk2117@columbia.edu';

export const site = {
  name: 'Sughosh Kaushik',
  title: 'Sughosh Kaushik | Database & infrastructure engineer',
  description: 'Database and infrastructure engineer working on Amazon Redshift query execution. Explore my engineering results, DuckDB research, and résumé, or get in touch about a role.',
  bio: 'I build the engines behind SQL queries and the pipelines that feed them. At AWS, I work on query execution in Amazon Redshift. At Eightfold, I led a five-person infrastructure team.',
  email,
  recruitingUrl: `mailto:${email}?subject=${encodeURIComponent('Engineering role and introductory call')}`,
  resumeUrl: '/sughosh-kaushik-resume.pdf',
  links: [
    { label: 'GitHub', url: 'https://github.com/sughosh360' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sughosh-kaushik' },
  ],
};
