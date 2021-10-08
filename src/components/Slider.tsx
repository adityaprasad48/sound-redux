/* eslint-disable react-hooks/exhaustive-deps */
/* global document */
import React, { useEffect, useRef } from 'react';
import offsetLeft from '../utils/DomUtils';

const defaultProps = {
  className: '',
};

interface Props {
  className?: string;
  max: number;
  onChange: any;
  value: number;
}

const prevent = (e: any) => {
  e.preventDefault();
  e.stopPropagation();
};

const Slider = ({ className= '', max, onChange, value }: Props) => {
  const divRef = useRef<any>('');

  const handleClick = (e: any) => {
    const percent =
      (e.clientX - offsetLeft(e.currentTarget)) / e.currentTarget.offsetWidth;
    onChange(percent * max);
  };

  const handleMouseMove = (e: any) => {
    const diff = e.clientX - offsetLeft(divRef && divRef.current);
    const percent = Math.min(
      Math.max(diff / Number(divRef && divRef.current.offsetWidth), 0),
      1
    );
    onChange(percent * max);
  };

  const handleMouseUp = () => {
    document.removeEventListener('mousemove', handleMouseMove);
    document.removeEventListener('mouseup', handleMouseUp);
  };

  const handleMouseDown = () => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  useEffect(
    () =>
      // The return block goes within useEffect().
      function cleanUp() {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      },

    [handleMouseMove, handleMouseUp]
  );

  const width = `${(value / max) * 100}%`;

  return (
    <div
      className={`slider ${className}`}
      onClick={handleClick}
      ref={divRef}
      role="button"
      aria-hidden
      tabIndex={0}
    >
      <div className="slider__bar">
        {max > 0 ? (
          <div className="slider__bar__fill" style={{ width }}>
            <div
              className="slider__handle"
              onClick={prevent}
              onMouseDown={handleMouseDown}
              role="button"
              tabIndex={0}
              aria-hidden
            />
          </div>
        ) : null}
      </div>
    </div>
  );
};

export default Slider;
