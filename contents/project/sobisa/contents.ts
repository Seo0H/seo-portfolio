import type { MainImageItemContents } from '@contents/components/main-image/types';

import { SkillTag } from '@/types/front-matter';

export const skillTags: SkillTag[] = ['TypeScript', 'Next.js', 'React-Query', 'Styled-Component'];

export const contents: MainImageItemContents[] = [
  {
    src: '/posts/sobisa/1.png',
    caption: {
      heading: 'Main',
      descriptions:
        '소비사냥꾼의 메인 페이지 입니다. 물건을 검색할 수 있는 검색창이 주된 기능이며 소비사의 링크를 공유할 수 있는 링크 버튼이 존재합니다.',
    },
    className: 'col-span-1 row-span-5',
    isPrint: true,
  },
  {
    src: '/posts/sobisa/2.png',
    caption: {
      heading: 'Search',
      descriptions:
        '소비사냥꾼의 검색 페이지 입니다. 사고 싶은 물건을 검색한 결과가 무한스크롤로 표시됩니다.',
    },
    isPrint: true,
  },
  {
    src: '/posts/sobisa/3.png',
    caption: {
      heading: 'Onboarding',
      descriptions:
        '초기 유저에게 보여지는 온보딩 페이지입니다. localStorage를 이용해 이전 방문 여부를 판단하고 기록하도록 구현하였습니다. localStorage 관련 로직을 [useLocalStorage](https://github.com/SobiSa-Expense-Hunter/SobiSa/blob/develop/src/hooks/useLocalStorage/index.ts)로 분리하여 관리했습니다.',
    },
    className: 'row-span-4',
  },
  {
    src: '/posts/sobisa/4.png',
    caption: {
      heading: 'Onboarding Dimmed',
      descriptions:
        'Onboarding 페이지 이후 나오는 오버레이 설명 기능입니다. 초기 유저에게 직접적인 사용법을 알려주기 위해 구현했습니다.',
    },
    className: 'row-span-4',
    isPrint: true,
  },
  {
    src: '/posts/sobisa/5.png',
    caption: {
      heading: 'Search history',
      descriptions:
        '이전 검색내역 기능 입니다. indexed DB를 이용해 구현하였습니다. 최종 결과 페이지까지 도달했을 시 indexed DB에 정보가 저장되며 Header에서 기록을 이전 확인하고 다시 볼 수 있습니다.',
    },
    isPrint: true,
  },
];
