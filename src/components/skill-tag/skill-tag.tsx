import { Tag } from '@/components/common/tag';
import { SkillTagMap, type SkillTag as TSkillTag } from '@/types/front-matter';
import { getKeyFromObject } from '@/types/utils';
import { cn } from '@/utils/cn';

type StyleMap = Record<TSkillTag, string>;

const styleMap = getKeyFromObject<TSkillTag>(SkillTagMap).reduce<StyleMap>((styleMap, skillTag) => {
  let styleClass = /*tw*/ 'bg-gray-200';

  if (skillTag === 'TypeScript') {
    styleClass = 'bg-sky-600 text-gray-50';
  }

  if (skillTag === 'Next.js') {
    styleClass = 'bg-gray-700 text-gray-50';
  }

  styleMap[skillTag] = styleClass;

  return styleMap;
}, {} as StyleMap);

export const SkillTag = ({ skill, className }: { skill: TSkillTag; className?: string }) => {
  return <Tag className={cn(styleMap[skill], className)}>{skill}</Tag>;
};
