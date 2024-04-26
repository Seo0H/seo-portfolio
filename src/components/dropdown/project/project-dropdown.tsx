import { useId } from 'react';

import { useNavigate, useParams } from 'react-router-dom';

import { Dropdown } from '@/components/common/form/dropdown';
import { projectKeys } from '@/pages/project';
import { buttons } from '@/styles/buttons';
import { cn } from '@/utils/cn';

export const ProjectDropdown = ({ className }: { className?: string }) => {
  const uniqId = useId();
  const { id } = useParams();
  const navigator = useNavigate();

  return (
    <Dropdown
      value={id}
      className={cn('rounded-md border-gray-100', className)}
      onChange={(e) => navigator(`/project/${e}`)}
    >
      <Dropdown.Trigger
        className={cn(buttons.default, 'px-5')}
        openStyle='shadow-md w-full rounded-b-none bg-white'
      >
        Projects
      </Dropdown.Trigger>

      <Dropdown.List className='overflow-hidden rounded-b-md shadow-md '>
        {projectKeys.map((key) => (
          <Dropdown.Item
            key={`${uniqId}-${key}`}
            value={key}
            className={cn(
              buttons.default,
              `flex items-center justify-center rounded-none bg-white backdrop-blur-md`,
            )}
            checkedStyle='bg-slate-100 text-gray-600'
          >
            {key.toUpperCase()}
          </Dropdown.Item>
        ))}
      </Dropdown.List>
    </Dropdown>
  );
};
