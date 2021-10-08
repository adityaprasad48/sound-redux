/* global document */
import { useEffect } from 'react';

interface SidebarBodyProps {
  children: any;
}

const handleScroll = () => {
  document.body.style.overflow = 'hidden';
};
const handleMouseLeave = () => {
  document.body.style.overflow = 'auto';
};

const SidebarBody = ({ children }: SidebarBodyProps) => {
  
  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    () => handleMouseLeave();
  }, []);

  return (
    <div className="sidebar__body" onScroll={handleScroll}>
      <div onMouseLeave={handleMouseLeave}>{children}</div>
    </div>
  );
};

export default SidebarBody;
