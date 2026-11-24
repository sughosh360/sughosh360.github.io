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

const role = 'Software Engineer';

export const site = {
  name: 'Sughosh Kaushik',
  role,
  title: `Sughosh Kaushik | ${role}`,
  description: 'Software engineer at AWS working on Amazon Redshift query execution and replication. Read how Sughosh addressed incorrect results and fleet-wide restarts.',
  bio: 'At AWS, I work on Amazon Redshift query execution, near-real-time zero-ETL replication, and the Aurora MySQL engine. When replication stalled and 15+ customers saw incorrect results, I traced the problem to how Redshift Serverless assigned work. Changing that shared policy addressed the risk to the wider fleet.',
  email,
  recruitingUrl: `mailto:${email}?subject=${encodeURIComponent('Staff+ software engineering opportunity')}`,
  links: [
    { label: 'GitHub', url: 'https://github.com/sughosh360' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sughosh-kaushik' },
  ],
};
