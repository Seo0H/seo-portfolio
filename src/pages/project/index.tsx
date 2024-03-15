import { useId } from 'react';

import * as ProjectPosts from '@contents/project';
import type * as ProjectPostsTypes from '@contents/project';

import { useParams } from 'react-router-dom';

import { RoundedBlock } from '@/components/common/block/inext';
import { SkillTag } from '@/components/skill-tag';

const ProjectPage = () => {
  const uniqId = useId();
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, matter } = ProjectPosts[id];

  return (
    <div className='flex flex-col gap-1'>
      <RoundedBlock
        className={`bg-peacock-800 text-peacock-200 flex justify-between border-none pb-[20px] font-bold`}
      >
        <span>SEO - Project 1</span>
        <span>{matter.duration}</span>
      </RoundedBlock>

      <RoundedBlock className={`flex translate-y-[-20px] items-center justify-between`}>
        <div className='flex flex-col gap-1'>
          <h1 className='text-sm font-bold leading-tight text-gray-500'>{matter.subTitle}</h1>
          <h1 className='text-3xl font-bold'>{matter.title}</h1>
        </div>
        <div className='flex max-w-[60%] flex-wrap items-end justify-end gap-1'>
          {matter.skillTag.map((skill) => (
            <SkillTag key={`${uniqId}-${skill}`} skill={skill} />
          ))}
        </div>
      </RoundedBlock>

      <div className={`translate-y-[-20px] [&_.rounded-block]:mt-1`}>
        <ProjectPost />
      </div>
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
