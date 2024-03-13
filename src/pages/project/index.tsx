import { useId } from 'react';

import Project, { matter } from '@contents/project/sobisa/write.mdx';

import { SkillTag } from '@/components/skill-tag';

const ProjectPage = () => {
  const id = useId();
  return (
    <>
      <div className='mb-8 flex flex-col gap-2'>
        <div>{matter.duration}</div>
        <h1 className='text-3xl font-bold'>{matter.title}</h1>
        <div className='*:mr-2 *:text-sm'>
          {matter.skillTag.map((skill) => (
            <SkillTag key={`${id}-${skill}`} skill={skill} />
          ))}
        </div>
      </div>
      <Project />
    </>
  );
};

export default ProjectPage;
