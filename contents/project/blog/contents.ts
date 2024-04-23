import type { MainImageItemContents } from '@contents/components/main-image/types';

export const contents: MainImageItemContents[] = [
  {
    src: '/posts/blog/1.png',
    className: 'row-span-2 col-span-3 ',
    isPrint: true,
    caption: { heading: 'Web main page' },
  },
  { src: '/posts/blog/4.png', className: '', isPrint: true, caption: { heading: 'Web post page' } },
  {
    src: '/posts/blog/2.png',
    className: '',
    isPrint: true,
    caption: { heading: 'Mobile main page' },
  },
  { src: '/posts/blog/3.png', isPrint: true, caption: { heading: 'Mobile post page' } },
];
