import { MainImageItemContents } from '@contents/components/main-image/types';

import { SkillTag } from '@/types/front-matter';

export const skillTags: SkillTag[] = [
  'TypeScript',
  'Vite',
  'MDX',
  'Tailwind',
  'Github Page',
  'SupaBase',
  'S3',
  'Lambda',
];

export const contents: MainImageItemContents[] = [
  {
    src: '/posts/portfolio/1.png',
    className: 'row-span-3 col-span-2',
    caption: { heading: 'Project page PC ver' },
    isPrint: true,
  },
  {
    src: '/posts/portfolio/2.png',
    className: 'row-span-2',
    caption: { heading: 'Project page mobile ver' },
    isPrint: true,
  },
  { src: '/posts/portfolio/3.png', caption: { heading: 'Image Modal' }, isPrint: true },
];
