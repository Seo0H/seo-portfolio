declare module '*.mdx' {
  import { FrontMatter } from './types/front-matter';
  import { SkillTag } from './types/front-matter';

  const matter: FrontMatter;
  const skillTags: SkillTag[];
  export { matter, skillTags };

  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
