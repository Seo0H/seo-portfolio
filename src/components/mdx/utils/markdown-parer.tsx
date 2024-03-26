import { Options, default as ReactMarkdown } from 'react-markdown';

import { components } from '@/components/mdx';

export const Markdown = (props: Options) => {
  return (
    <ReactMarkdown unwrapDisallowed disallowedElements={['p']} components={{ ...components }}>
      {props.children}
    </ReactMarkdown>
  );
};
