import type { OGResult } from '@/components/mdx/a/type';
import type { ErrorResult } from 'open-graph-scraper';

export const isOgError = (data: OGResult): data is ErrorResult => {
  if (data.result.error) return true;

  return false;
};
