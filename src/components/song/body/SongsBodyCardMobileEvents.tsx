/* global document */
import React from 'react';

interface Props {
  index: number;
  isActive: boolean;
  playlist: string;
  playSong: any;
}

const SongsBodyCardMobileEvents = ({
  index,
  isActive,
  playlist,
  playSong,
}: Props) => {
  const handleClick = () => {
    if (isActive) {
      const audioElement: HTMLAudioElement = document.getElementById('audio')!;
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    } else {
      playSong(playlist, index);
    }
  };

  return (
    <div
      className="songs-body-card__mobile-events"
      onClick={handleClick}
      role="button"
      aria-hidden
      tabIndex={0}
    />
  );
};

export default SongsBodyCardMobileEvents;
