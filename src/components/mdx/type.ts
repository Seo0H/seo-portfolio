import { components } from '@/components/mdx';

declare global {
  type MDXProvidedComponents = typeof components;
}
