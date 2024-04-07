import { useId } from 'react';

import * as ProjectPosts from '@contents/project/index';
import type * as ProjectPostsTypes from '@contents/project/index';

import { useParams } from 'react-router-dom';

import { RoundedBlock } from '@/components/common/block/inext';
import { SkillTag } from '@/components/skill-tag';

const ProjectPage = () => {
  const uniqId = useId();
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, matter } = ProjectPosts[id];
  const projectSubTitle = `Project ${projectKeys.indexOf(id) + 1}`;

  return (
    <div className='flex flex-col gap-1 print:gap-1 [&_.print-breakpoint]:print:break-inside-avoid'>
      {/* PC View */}
      <RoundedBlock
        className={`hidden justify-between bg-peacock-800 pb-[20px] text-[12px] font-bold text-peacock-200
                    md:flex print:rounded-none print:bg-white print:py-1 print:font-medium print:text-gray-500`}
      >
        <span>{projectSubTitle}</span>
        <span>{matter.duration}</span>
      </RoundedBlock>

      <RoundedBlock
        className={`hidden translate-y-[-20px] items-center justify-between border border-gray-200 md:flex  print:translate-y-0 `}
      >
        <div className='flex flex-col gap-1'>
          <h1 className='text-sm font-bold leading-tight text-gray-500 print:font-medium'>
            {matter.subTitle}
          </h1>
          <h1 className='text-3xl font-bold'>{matter.title}</h1>
        </div>

        <div className='hidden max-w-[60%] flex-wrap items-end justify-end gap-1 md:flex'>
          {matter.skillTag.map((skill) => (
            <SkillTag key={`${uniqId}-${skill}`} skill={skill} />
          ))}
        </div>
      </RoundedBlock>

      {/* Mobile View */}
      <div className='flex flex-col gap-2 md:hidden'>
        <h1 className='text-base font-semibold text-peacock-800'>{projectSubTitle}</h1>
        <span className='text-3xl font-extrabold text-black'>{matter.title}</span>

        <div className='mt-4 flex flex-wrap gap-[3px_5px] whitespace-nowrap font-light  text-gray-500'>
          {matter.skillTag.map((skill) => (
            <SkillTag
              key={`${uniqId}-${skill}`}
              skill={skill}
              className='bg-slate-200 px-2 py-1 text-sm font-medium text-gray-500'
            />
          ))}
        </div>
      </div>
      <div className='translate-y-[-20px]' />

      <ProjectPost />
    </div>
  );
};

export default ProjectPage;

export type ProjectNamespace = typeof ProjectPostsTypes;
export const projectKeys = Object.keys(ProjectPosts) as (keyof ProjectNamespace)[];

const isPostType = (id: string | undefined): id is keyof ProjectNamespace => {
  if (id && id in ProjectPosts) return true;
  return false;
};
