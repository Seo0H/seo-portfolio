import { useId } from 'react';

import { Link } from 'react-router-dom';

import { projectKeys } from '@/pages/project';

export const Header = () => {
  const uniqId = useId();

  return (
    <div className='h-header flex items-center gap-4'>
      <button onClick={window.print}>PDF 저장</button>
      <Link to='/info'>INFO</Link>

      {projectKeys.map((key) => (
        <Link to={`/project/${key}`} key={`${key}-${uniqId}`}>
          PROJECT : {key.toUpperCase()}
        </Link>
      ))}
    </div>
  );
};
