import React, { useState } from 'react';
import PopoverPanel from './PopoverPanel';

interface PopoverProps {
  className: string;
  children: any;
}

const Popover = ({ className, children }: PopoverProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={`popover ${className}`}>
      <span
        className="popover__trigger"
        onClick={toggleIsOpen}
        role="button"
        tabIndex={0}
        aria-hidden
      >
        {children[0]}
      </span>
      {isOpen ? (
        <PopoverPanel toggleIsOpen={toggleIsOpen}>{children[1]}</PopoverPanel>
      ) : null}
    </div>
  );
};

export default Popover;
