import * as ProjectPosts from '@contents/project/index';
import type * as ProjectPostsTypes from '@contents/project/index';

import { getKeyFromObject } from '@/types/utils';

export type ProjectNamespace = typeof ProjectPostsTypes;
export const projectKeys = getKeyFromObject<keyof ProjectNamespace>(ProjectPosts).sort(
  (aPostsKey, bPostKey) => ProjectPosts[aPostsKey].matter.idx - ProjectPosts[bPostKey].matter.idx,
);

export const portfolioPath = ['info', ...projectKeys.map((key) => `project/${key}`)];
