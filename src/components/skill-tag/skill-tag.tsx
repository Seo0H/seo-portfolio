import { Tag } from '@/components/common/tag';
import { cn } from '@/utils/cn';

import type { SkillTag as TSkillTag } from '@/types/front-matter';

const skillClasses: Record<TSkillTag, string> = /*tw*/ {
  TypeScript: 'bg-sky-600 text-gray-50',
  'Next.js': 'bg-gray-700 text-gray-50',
  'React-Query': 'bg-gray-200',
  'Styled-Component': 'bg-gray-200',
  'Github Page': 'bg-gray-200',
  ContentsLayer: 'bg-gray-200',
};

export const SkillTag = ({ skill, className }: { skill: TSkillTag; className?: string }) => {
  return <Tag className={cn(skillClasses[skill], className)}>{skill}</Tag>;
};
