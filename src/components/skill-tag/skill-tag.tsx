import { Tag } from '@/components/common/tag';

import type { SkillTag as TSkillTag } from '@/types/front-matter';

const skillClasses: Record<TSkillTag, string> = /*tw*/ {
  TypeScript: 'bg-sky-600 text-gray-50',
  'Next.js': 'bg-gray-700 text-gray-50',
  'React-Query': 'bg-gray-200',
  'Styled-Component': 'bg-gray-200',
};

export const SkillTag = ({ skill }: { skill: TSkillTag }) => {
  return <Tag className={skillClasses[skill]}>{skill}</Tag>;
};
