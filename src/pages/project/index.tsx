import * as ProjectPosts from '@contents/project/index';

import { useParams } from 'react-router-dom';

import animate from '@/styles/animation.module.css';
import { cn } from '@/utils/cn';
import { isPostType } from '@/utils/types';

import { Heading } from './heading';

const ProjectPage = () => {
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, ...mdxProps } = ProjectPosts[id];

  return (
    <div className={cn('fade-in flex flex-col gap-1 print:[&_h2]:mt-4', animate['fade-in'])}>
      <Heading {...mdxProps} id={id} />
      <ProjectPost />
    </div>
  );
};

export default ProjectPage;
