/* global window */
import React, { useCallback, useEffect, useState } from 'react';

const stickyOnScroll = (InnerComponent: any, scrollThreshold: any) => {
  const StickyOnScrollComponent = (props: any) => {
    const [sticky, setSticky] = useState(false);

    const handleScroll = useCallback(() => {
      const { scrollY } = window;
      const scrolledPastThreshold = scrollY >= scrollThreshold;

      if (scrolledPastThreshold && !sticky) {
        setSticky(true);
      } else if (!scrolledPastThreshold && sticky) {
        setSticky(false);
      }
    }, [sticky]);

    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [handleScroll]);

    return <InnerComponent {...props} sticky={sticky} />;
  };

  return StickyOnScrollComponent;
};

export default stickyOnScroll;
