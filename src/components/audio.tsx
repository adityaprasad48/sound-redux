import React, { useRef } from 'react';

interface Props {
  audioUrl: string;
  onLoadedMetadata: any;
  onLoadStart: any;
  onPause: any;
  onPlay: any;
  onTimeUpdate: any;
  onVolumeChange: any;
  playNextSong: any;
}

const audio = (InnerComponent: any) => {
  const AudioComponent = ({
    audioUrl,
    onLoadedMetadata,
    onLoadStart,
    onPause,
    onPlay,
    onTimeUpdate,
    onVolumeChange,
    playNextSong,
  }: Props) => {
    const audioRef = useRef<HTMLAudioElement>().current!;

    // componentDidMount() {
    //   const { audioElement } = this;
    //   audioElement.play();
    // }

    // componentDidUpdate(prevProps) {
    //   const { audioElement, props } = this;
    //   const { audioUrl } = props;
    //   if (prevProps.audioUrl !== audioUrl) {
    //     audioElement.play();
    //   }
    // }

    const handleEnded = () => {
      playNextSong();
    };

    const handleLoadedMetadata = () => {
      onLoadedMetadata(Math.floor(audioRef.duration));
    };

    const handleLoadStart = () => {
      onLoadStart();
    };

    const hanelePlay = () => {
      onPlay();
    };

    const handlePause = () => {
      onPause();
    };

    const handleTimeUpdate = () => {
      onTimeUpdate(Math.floor(audioRef.currentTime));
    };

    const handleVolumeChange = () => {
      const { muted, volume } = audioRef;
      onVolumeChange(muted, volume);
    };

    const handlechangeCurrentTime = (currentTime: any) => {
      audioRef.currentTime = currentTime;
    };

    const handlechangeVolume = (volume: any) => {
      audioRef.muted = false;
      audioRef.volume = volume;
    };

    const handletoggleMuted = () => {
      const { muted } = audioRef;
      audioRef.muted = !muted;
    };

    const handletogglePlay = () => {
      if (audioRef.paused) {
        audioRef.play();
      } else {
        audioRef.pause();
      }
    };

    return (
      <div>
        {/*  eslint-disable-next-line jsx-a11y/media-has-caption */}
        <audio
          id="audio"
          onEnded={handleEnded}
          onLoadedMetadata={handleLoadedMetadata}
          onLoadStart={handleLoadStart}
          onPause={handlePause}
          onPlay={hanelePlay}
          onTimeUpdate={handleTimeUpdate}
          onVolumeChange={handleVolumeChange}
          // @ts-ignore
          ref={audioRef}
          src={audioUrl}
        />
        {/* <InnerComponent
          {...state}
          {...props}
          changeCurrentTime={handlechangeCurrentTime}
          changeVolume={handlechangeVolume}
          toggleMuted={handletoggleMuted}
          togglePlay={handletogglePlay}
        /> */}
      </div>
    );

    return AudioComponent;
  };
};

export default audio;
