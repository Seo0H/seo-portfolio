export type FrontMatter = {
  title: string;
  description: string;
  draft: boolean;
  image: string;
  skillTags: SkillTag[];
  duration: string;
};

export type SkillTag = 'TypeScript' | 'Next.js' | 'React-Query' | 'Styled-Component';
