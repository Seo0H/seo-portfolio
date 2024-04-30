import { useEffect } from 'react';

export const useDisableGlobalScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.body.style.paddingRight = '1rem';

    return () => {
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, []);
};
