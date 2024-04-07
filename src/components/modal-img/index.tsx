import { ReactElement, useState, type ComponentProps } from 'react';

export const ToggleResult = ({
  clickResult,
  ...props
}: ComponentProps<'div'> & { clickResult?: ReactElement }) => {
  const [isToggled, setToggle] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
    setToggle(!isToggled);
  };

  return (
    <>
      {isToggled && (
        <div onClick={handleClick} className='hidden'>
          {clickResult}
        </div>
      )}
      <div onClick={handleClick} {...props} />
    </>
  );
};
