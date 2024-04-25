declare module '*.mdx' {
  import { SkillTag } from './types/front-matter';

  const matter: FrontMatter;
  const skillTags: SkillTag[];
  export { matter, skillTags };

  export type FrontMatter = {
    title: string;
    subTitle: string;
    description: string;
    draft: boolean;
    image: string;
    duration: string;
  };

  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
