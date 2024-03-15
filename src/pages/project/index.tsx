import { useId } from 'react';

import * as ProjectPosts from '@contents/project';
import type * as ProjectPostsTypes from '@contents/project';

import { useParams } from 'react-router-dom';

import { SkillTag } from '@/components/skill-tag';

const ProjectPage = () => {
  const uniqId = useId();
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, matter } = ProjectPosts[id];

  return (
    <>
      <ProjectPost
        title={
          <div className='not-prose mb-8 flex flex-col gap-2'>
            <div>{matter.duration}</div>
            <h1 className='text-3xl font-bold'>{matter.title}</h1>
            <div className='*:mr-2 *:text-sm'>
              {matter.skillTag.map((skill) => (
                <SkillTag key={`${uniqId}-${skill}`} skill={skill} />
              ))}
            </div>
          </div>
        }
      />
    </>
  );
};

export default ProjectPage;

export type ProjectNamespace = typeof ProjectPostsTypes;
export const projectKeys = Object.keys(ProjectPosts) as (keyof ProjectNamespace)[];

const isPostType = (id: string | undefined): id is keyof ProjectNamespace => {
  if (id && id in ProjectPosts) return true;
  return false;
};
