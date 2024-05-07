import React, { useEffect } from 'react';

import ReactGA from 'react-ga4';
import { useLocation } from 'react-router-dom';

const TRACKING_ID = import.meta.env.VITE_GA;

export const GA = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
    ReactGA.send({ hitType: 'pageview', page: location.pathname, title: 'Landing Page' });
  }, [location]);

  return children;
};
