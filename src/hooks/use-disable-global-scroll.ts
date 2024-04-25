import { useEffect } from 'react';

export const useDisableGlobalScroll = () => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = '';
    };
  }, []);
};
