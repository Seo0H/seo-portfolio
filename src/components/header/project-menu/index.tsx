import type { ComponentProps, ReactElement } from 'react';
import React, { useId } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Tag } from '@/components/common/tag';
import { projectInfo } from '@/constant/portfolio-page';
import { buttons } from '@/styles/buttons';
import { tag } from '@/styles/tag';
import { cn } from '@/utils/cn';

export const ProjectMenu = ({
  projectWrapper: propWrapper,
}: {
  projectWrapper?: (props: ComponentProps<'div'>) => ReactElement;
}) => {
  const navigator = useNavigate();
  const { id } = useParams();
  const uniqId = useId();
  const Wrapper = propWrapper ?? React.Fragment;

  return Object.entries(projectInfo).map(([infoKey, info]) => {
    const [year] = info.duration.split('.');
    return (
      <Wrapper key={`${uniqId}-${infoKey}`}>
        <div
          onClick={() => navigator(`/project/${infoKey}`)}
          className={cn(
            buttons.default,
            `flex w-full cursor-pointer justify-between px-0 py-3 font-medium 
            hover:bg-white hover:text-blue-500
            dark:bg-transparent 
            ${id === infoKey && 'text-blue-500'}`,
          )}
        >
          {info.title}

          <div className='flex gap-1'>
            <Tag className={cn(tag.default, 'px-2 py-0 font-normal text-slate-800')}>{year}</Tag>
            <Tag className={cn(tag.default, 'px-2 py-0 font-normal text-slate-800')}>
              {info.type === 'alone' ? '개인' : '팀'}
            </Tag>
          </div>
        </div>
      </Wrapper>
    );
  });
};
