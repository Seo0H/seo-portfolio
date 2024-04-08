import axios, { type CancelTokenSource } from 'axios';

import type { OGResult } from '@/components/mdx/a/type';

export const getOGData = async (url: string, cancelSource?: CancelTokenSource) => {
  const { data } = await axios.post<OGResult>(import.meta.env.VITE_BACKEND_URL, {
    url,
    cancelSource,
  });
  return data;
};
