import React from 'react';

// const defaultProps = {
//   children: null,
//   className: '',
// };

interface LoaderProps {
  children?: any;
  className: any;
  isLoading: boolean;
}

const Loader = ({ children = null, className = '', isLoading }: LoaderProps) => {
  if (isLoading) {
    return (
      <div className={`loader ${className}`}>
        <div className="loader__rects">
          <div className="loader__rect loader__rect--1" />
          <div className="loader__rect loader__rect--2" />
          <div className="loader__rect loader__rect--3" />
          <div className="loader__rect loader__rect--4" />
          <div className="loader__rect loader__rect--5" />
        </div>
      </div>
    );
  }

  return children;
};

export default Loader;
