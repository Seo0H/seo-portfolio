export enum SkillTagMap {
  'TypeScript',
  'React',
  'Next.js (v13)',
  'Next.js',
  'Vite',
  'Route53',
  'React-Query',
  'Styled-Component',
  'Github Page',
  'ContentsLayer',
  'MDX',
  'SupaBase',
  'Tailwind',
  'S3',
  'CloudFront',
  'Route 53',
  'E2C',
  'Lambda',
  'Zod',
  'Zustand',
  'Jest',
  'Husky',
}

export type FrontMatter = {
  title: string;
  subTitle: string;
  description: string;
  duration: string;
  idx: number;
  type: 'team' | 'alone';
};

export type SkillTag = keyof typeof SkillTagMap;

// TODO: skill tag 항목별 스킬 분리

// interface Skills {
//   language: keyof typeof Language;
//   build: keyof typeof Build;
//   style: keyof typeof Style;
//   stateManagement: keyof typeof StateManagement;
//   deploy: keyof typeof Deploy;
//   database: keyof typeof Database;
//   infra: keyof typeof Infra;
//   ect: keyof typeof ECT;
// }

// enum Language {
//   'TypeScript',
//   'MDX',
// }

// enum Build {
//   'Next.js',
//   'Vite',
// }

// enum Style {
//   'Styled-Component',
//   'Tailwind',
// }

// enum StateManagement {
//   'React-Query',
// }

// enum Deploy {
//   'Github Page',
// }

// enum Database {
//   'SupaBase',
// }

// enum ECT {
//   'ContentsLayer',
// }

// enum Infra {
//   'S3',
//   'CloudFront',
//   'Route 53',
//   'E2C',
//   'Lambda',
// }
