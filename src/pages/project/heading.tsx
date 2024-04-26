import { useId } from 'react';

import { SkillTag } from '@/components/skill-tag';

import { type ProjectNamespace, projectKeys } from './index';

import type { FrontMatter, SkillTag as TSkillTag } from '@/types/front-matter';

export const Heading = ({
  id,
  matter,
  skillTags,
}: {
  id: keyof ProjectNamespace;
  matter: FrontMatter;
  skillTags: TSkillTag[];
}) => {
  const uniqId = useId();
  const projectSubTitle = `Project ${projectKeys.indexOf(id) + 1}`;

  return (
    <div className='mb-4 flex flex-col gap-2 print:block'>
      <h1 className='text-base font-semibold text-peacock-800'>{projectSubTitle}</h1>
      <span className='text-3xl font-extrabold text-black'>{matter.title}</span>

      <div className='mt-4 flex flex-wrap gap-[3px_5px] whitespace-nowrap font-light  text-gray-500'>
        {skillTags.map((skill) => (
          <SkillTag
            key={`${uniqId}-${skill}`}
            skill={skill}
            className='bg-slate-200 px-2 py-1 text-sm font-medium text-gray-500'
          />
        ))}
      </div>
    </div>
  );
};
