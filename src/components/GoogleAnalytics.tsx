import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ReactGA from 'react-ga4';

const GA_ID = import.meta.env.VITE_GA_ID;

export const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    if (GA_ID) {
      try {
        ReactGA.initialize(GA_ID);
      } catch (error) {
        console.warn('Google Analytics initialization failed (likely due to storage restrictions):', error);
      }
    }
  }, []);

  useEffect(() => {
    if (GA_ID) {
      ReactGA.send({ hitType: 'pageview', page: location.pathname + location.search });
    }
  }, [location]);

  return null;
};
