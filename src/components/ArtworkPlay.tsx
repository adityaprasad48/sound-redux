/* global document */
import React from 'react';

interface ArtWorkPlayProps {
  index: any;
  isActive: any;
  isPlaying: any;
  playlist: any;
  playSong: any;
}

const ArtworkPlay = ({
  index,
  playlist,
  playSong,
  isPlaying,
  isActive,
}: ArtWorkPlayProps) => {

  const handlePlay = () => {
    playSong(playlist, index);
  };

  const togglePlay = () => {
    const audioElement:HTMLAudioElement = document.getElementById('audio')!;
    if (isPlaying) {
      audioElement.pause();
    } else {
      audioElement.play();
    }
  };

  return (
    <div
      className={`artwork-play ${isActive ? 'artwork-play--active' : ''}`}
      role="button"
      aria-hidden
      tabIndex={0}
      onClick={isActive ? togglePlay : handlePlay}
    >
      <i
        className={`artwork-play__icon ion-${
          isActive && isPlaying ? 'radio-waves' : 'ios-play'
        }`}
      />
    </div>
  );
};

export default ArtworkPlay;
