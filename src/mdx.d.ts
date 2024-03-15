declare module '*.mdx' {
  const matter: FrontMatter;
  export { matter };

  export type FrontMatter = {
    title: string;
    subTitle: string;
    description: string;
    draft: boolean;
    image: string;
    skillTag: ('TypeScript' | 'Next.js' | 'React-Query' | 'Styled-Component')[];
    duration: string;
  };

  let MDXComponent: (props) => JSX.Element;
  export default MDXComponent;
}
