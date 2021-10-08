/* global document */
/* global window */
import React, { useCallback, useEffect } from 'react';

// const defaultProps = {
//   args: [],
//   className: '',
// };

interface Props {
  args: any;
  children: any;
  className?: any;
  onScroll: any;
}

const InfiniteScroll = ({
  args,
  children,
  className = '',
  onScroll,
}: Props) => {
  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 200
    ) {
      onScroll(...args);
    }
  }, [args, onScroll]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return <div className={className}>{children}</div>;
};

export default InfiniteScroll;
