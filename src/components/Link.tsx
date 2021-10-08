import React from 'react';
import { compileHash } from '../utils/RouterUtils';

// const defaultProps = {
//   className: '',
//   keys: {},
//   onClick: null,
//   options: {},
//   title: '',
// };

interface Props {
  className: any;
  children?: any;
  onClick?: any;
  navigateTo: any;
  keys?: any;
  options?: any;
  path?: string;
  title?: string;
}

const Link = ({
  children,
  className,
  onClick,
  navigateTo,
  keys,
  options,
  path,
  title,
}: Props) => {
  const handleClick = (e: any) => {
    e.preventDefault();
    navigateTo({ path, keys, options });
    if (typeof onClick === 'function') {
      onClick();
    }
  };

  return (
    <a
      className={className}
      href={`/${compileHash({ path, keys, options })}`}
      onClick={handleClick}
      title={title}
    >
      {children}
    </a>
  );
};

export default Link;
