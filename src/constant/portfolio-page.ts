import * as ProjectPosts from '@contents/project/index';
import type * as ProjectPostsTypes from '@contents/project/index';

import { FrontMatter } from '@/types/front-matter';
import { getEntryFromObject, getKeyFromObject } from '@/types/utils';

export type ProjectNamespace = typeof ProjectPostsTypes;
export const projectKeys = getKeyFromObject<keyof ProjectNamespace>(ProjectPosts).sort(
  (aPostsKey, bPostKey) => ProjectPosts[aPostsKey].matter.idx - ProjectPosts[bPostKey].matter.idx,
);

type ProjectInfoMap = Record<keyof ProjectNamespace, FrontMatter & { key: keyof ProjectNamespace }>;

export type ProjectInfoInfo = FrontMatter & { key: keyof ProjectNamespace };

export const projectInfo = getEntryFromObject<
  keyof ProjectNamespace,
  (typeof ProjectPostsTypes)[keyof ProjectNamespace]
>(ProjectPosts).reduce<ProjectInfoMap>(
  (acc, [key, post]) => {
    acc[key] = { ...post.matter, key };
    return acc;
  },

  {} as ProjectInfoMap,
);

export const portfolioPath = ['info', ...projectKeys.map((key) => `project/${key}`)];
