import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

export const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  const prevPathname = useRef(pathname);

  useEffect(() => {
    if (prevPathname.current !== pathname) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
      });
      prevPathname.current = pathname;
    }
  }, [pathname]);

  return null;
};