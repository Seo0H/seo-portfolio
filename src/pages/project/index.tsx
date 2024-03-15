import { useId } from 'react';

import * as Posts from '@contents/project';
import type * as PostsTypes from '@contents/project';

import { useParams } from 'react-router-dom';

import { SkillTag } from '@/components/skill-tag';

const ProjectPage = () => {
  const uniqId = useId();
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, matter } = Posts[id];

  return (
    <>
      <div className='mb-8 flex flex-col gap-2'>
        <div>{matter.duration}</div>
        <h1 className='text-3xl font-bold'>{matter.title}</h1>
        <div className='*:mr-2 *:text-sm'>
          {matter.skillTag.map((skill) => (
            <SkillTag key={`${uniqId}-${skill}`} skill={skill} />
          ))}
        </div>
      </div>
      <ProjectPost />
    </>
  );
};

export default ProjectPage;

type PostsNamespaceType = typeof PostsTypes;

const isPostType = (id: string | undefined): id is keyof PostsNamespaceType => {
  if (id && id in Posts) return true;
  return false;
};
