import React from 'react';

interface Props {
  isActive: boolean;
  onMouseMove: any;
  playSong: any;
  seek: any;
}

const WaveformEvents = ({ isActive, onMouseMove, playSong, seek }: Props) => {
  if (isActive) {
    return (
      <div
        className="waveform__events"
        onMouseDown={seek}
        onMouseMove={onMouseMove}
        role="button"
        aria-hidden
        tabIndex={0}
      />
    );
  }

  return (
    <div
      className="waveform__events"
      onMouseDown={playSong}
      role="button"
      aria-hidden
      tabIndex={0}
    />
  );
};

export default WaveformEvents;
