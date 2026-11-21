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
  title: 'Sughosh Kaushik',
  description: 'Personal site of Sughosh Kaushik: projects and reading list.',
  bio: 'Database enthusiast. Software engineer at AWS, working on the Redshift query engine — before that ZeroETL and Aurora MySQL. Fluent in SQL; Columbia MS thesis on lineage querying in DuckDB. I write about what I build and keep track of what I read.',
  links: [
    { label: 'GitHub', url: 'https://github.com/sughosh360' },
    { label: 'LinkedIn', url: 'https://www.linkedin.com/in/sughosh-kaushik' },
    // TODO: add more, e.g. { label: 'Email', url: 'mailto:<you>@example.com' },
  ],
};
