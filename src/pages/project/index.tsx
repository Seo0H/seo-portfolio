import { useId } from 'react';

import { components } from '@/components/mdx';
import { SkillTag } from '@/components/skill-tag';
import Project, { matter } from 'contents/sobisa.mdx';

const ProjectPage = () => {
  const id = useId();
  return (
    <>
      <div>{matter.duration}</div>
      <h1 className='text-3xl font-bold'>{matter.title}</h1>
      <div className='*:mr-2 *:text-sm'>
        {matter.skillTag.map((skill) => (
          <SkillTag key={`${id}-${skill}`} skill={skill} />
        ))}
      </div>

      <Project components={components} />
    </>
  );
};

export default ProjectPage;
