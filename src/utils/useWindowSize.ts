import { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';

import { pixels } from '@pacote/pixels';

const useWindowSize = () => {
  const theme = useTheme();
  const isClient = typeof window === 'object';

  const [windowSize, setWindowSize] = useState({
    width: isClient ? window.innerWidth : 0,
    height: isClient ? window.innerHeight : 0,
  });

  const hideOn = (breakPoint: 'xs' | 'sm' | 'md') => {
    if(breakPoint === 'xs') {
      return windowSize.width >= pixels(`${theme.flexboxgrid.breakpoints.sm}em`);
    }

    if(breakPoint === 'sm') {
      return windowSize.width >= pixels(`${theme.flexboxgrid.breakpoints.md}em`);
    }

    return windowSize.width >= pixels(`${theme.flexboxgrid.breakpoints.lg}em`);
  };

  const showOn = (breakPoint: 'xs' | 'sm' | 'md') => {
    if(breakPoint === 'xs') {
      return windowSize.width < pixels(`${theme.flexboxgrid.breakpoints.sm}em`);
    }

    if(breakPoint === 'sm') {
      return windowSize.width < pixels(`${theme.flexboxgrid.breakpoints.md}em`);
    }

    return windowSize.width < pixels(`${theme.flexboxgrid.breakpoints.lg}em`);
  };

  useEffect((): any => {
    if(!isClient) {
      return false;
    }

    function handleResize() {
      setWindowSize({
        width: isClient ? window.innerWidth : 0,
        height: isClient ? window.innerHeight : 0,
      });
    }

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [isClient]);

  return { ...windowSize, hideOn, showOn };
};

export default useWindowSize;
