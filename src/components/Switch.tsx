import React from 'react';

interface SwitchProps {
  args: any;
  on: any;
  onClick: any;
}

const Switch = ({ args, on, onClick }: SwitchProps) => {
  const handleClick = () => {
    onClick(...args);
  };

  return (
    <div
      className={`switch ${on ? 'switch--on' : ''}`}
      onClick={handleClick}
      role="button"
      aria-hidden
      tabIndex={0}
    >
      <div className="switch__button" />
    </div>
  );
};

export default Switch;
