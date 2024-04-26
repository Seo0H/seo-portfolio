import { projectKeys, type ProjectNamespace } from '@/constant/portfolio-page';

export type Merge<M, N> = N extends Record<string, unknown> ? M : Omit<M, keyof N> & N;

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AnyFunction<T = any> = (...args: T[]) => any;

export type LiteralUnion<T extends U, U extends Primitive> = T | (U & { _?: never });

export type Primitive = null | undefined | string | number | boolean | symbol | bigint;

export const isPostType = (id: string | undefined): id is keyof ProjectNamespace => {
  if (id && projectKeys.find((keys) => keys === id)?.length) return true;
  return false;
};
