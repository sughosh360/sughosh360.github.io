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
}

export const site = {
  name: 'Sughosh Kaushik',
  title: 'Sughosh Kaushik | Database engineering notes',
  description: 'Explore Sughosh Kaushik’s work on Amazon Redshift and DuckDB, with a SQL lineage case study, query plan walkthrough, and reading notes.',
  bio: 'I’m a database enthusiast and software engineer working on query execution at Amazon Redshift. At Columbia, I built a way to ask DuckDB which rows contributed to a result.',
  links: [
    { label: 'GitHub', url: 'https://github.com/sughosh360' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sughosh-kaushik' },
    // TODO: add more, e.g. { label: 'Email', url: 'mailto:<you>@example.com' },
  ],
};
