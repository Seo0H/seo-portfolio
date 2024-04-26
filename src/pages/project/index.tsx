import * as ProjectPosts from '@contents/project/index';
import type * as ProjectPostsTypes from '@contents/project/index';

import { useParams } from 'react-router-dom';

import { getKeyFromObject } from '@/types/utils';

import { Heading } from './heading';

const ProjectPage = () => {
  const { id } = useParams();
  if (!isPostType(id)) throw new Error('');

  const { default: ProjectPost, ...mdxProps } = ProjectPosts[id];

  return (
    <div className='flex flex-col gap-1 print:[&_h2]:mt-4'>
      <Heading {...mdxProps} id={id} />
      <ProjectPost />
    </div>
  );
};

export default ProjectPage;

export type ProjectNamespace = typeof ProjectPostsTypes;
export const projectKeys = getKeyFromObject<keyof ProjectNamespace>(ProjectPosts).sort(
  (aPostsKey, bPostKey) => ProjectPosts[aPostsKey].matter.idx - ProjectPosts[bPostKey].matter.idx,
);

const isPostType = (id: string | undefined): id is keyof ProjectNamespace => {
  if (id && id in ProjectPosts) return true;
  return false;
};
function SuspenseSimulator({ suspense = false }: { suspense: boolean }) {
  if (suspense) {
    throw new Promise(() => undefined);
  } else {
    return null;
  }
}
