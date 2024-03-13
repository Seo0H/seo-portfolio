import type { MainImageItemContents } from '@contents/project/components/main-image/types';

export const contents: MainImageItemContents[] = [
  {
    src: '/posts/sobisa/1.png',
    caption: {
      heading: 'Main',
      descriptions:
        '소비사냥꾼의 메인 페이지 입니다. 물건을 검색할 수 있는 검색창이 주된 기능이며 소비사의 링크를 공유할 수 있는 링크 버튼이 존재합니다.',
    },
    className: 'col-span-1 row-span-5',
  },
  {
    src: '/posts/sobisa/2.png',
    caption: {
      heading: 'Search',
      descriptions:
        '소비사냥꾼의 검색 페이지 입니다. 사고 싶은 물건을 검색한 결과가 무한스크롤로 표시됩니다.',
    },
  },
  {
    src: '/posts/sobisa/3.png',
    caption: { heading: 'Onboarding', descriptions: 'hi' },
    className: 'row-span-4',
  },
  {
    src: '/posts/sobisa/4.png',
    caption: { heading: 'Onboarding Dimmed', descriptions: 'hi' },
    className: 'row-span-4',
  },
  {
    src: '/posts/sobisa/5.png',
    caption: { heading: 'Search history', descriptions: 'hi' },
  },
];
