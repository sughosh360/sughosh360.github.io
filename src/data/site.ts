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
  description: 'Sughosh Kaushik is a software engineer at AWS. Explore his work on Amazon Redshift and Aurora MySQL, his engineering experience, and his research at Columbia.',
  bio: 'At AWS, I work on the engine that runs queries in Amazon Redshift. I’ve also worked on the Aurora MySQL engine and on zero-ETL integrations that replicate data into Redshift in near real time.',
  email,
  recruitingUrl: `mailto:${email}?subject=${encodeURIComponent('Engineering role and introductory call')}`,
  links: [
    { label: 'GitHub', url: 'https://github.com/sughosh360' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sughosh-kaushik' },
  ],
};
