import React from 'react';

interface Props{
 audioUrl: string;
  onLoadedMetadata:any;
  onLoadStart:any;
  onPause:any;
  onPlay:any;
  onTimeUpdate:any;
  onVolumeChange:any;
  playNextSong:any;
};

const audio = (InnerComponent:any) => {
  const AudioComponent = () => {
    componentDidMount() {
      const { audioElement } = this;
      audioElement.play();
    }

    componentDidUpdate(prevProps) {
      const { audioElement, props } = this;
      const { audioUrl } = props;
      if (prevProps.audioUrl !== audioUrl) {
        audioElement.play();
      }
    }

    const handleEnded = () => {
      const { playNextSong } = this.props;
      playNextSong();
    }

    onLoadedMetadata() {
      const { audioElement, props } = this;
      const { onLoadedMetadata } = props;
      onLoadedMetadata(Math.floor(audioElement.duration));
    }

    onLoadStart() {
      const { onLoadStart } = this.props;
      onLoadStart();
    }

    onPlay() {
      const { onPlay } = this.props;
      onPlay();
    }

    onPause() {
      const { onPause } = this.props;
      onPause();
    }

    onTimeUpdate() {
      const { audioElement, props } = this;
      const { onTimeUpdate } = props;
      onTimeUpdate(Math.floor(audioElement.currentTime));
    }

    onVolumeChange() {
      const { audioElement, props } = this;
      const { muted, volume } = audioElement;
      const { onVolumeChange } = props;
      onVolumeChange(muted, volume);
    }

    changeCurrentTime(currentTime) {
      this.audioElement.currentTime = currentTime;
    }

    changeVolume(volume) {
      const { audioElement } = this;
      audioElement.muted = false;
      audioElement.volume = volume;
    }

    toggleMuted() {
      const { audioElement } = this;
      const { muted } = audioElement;
      audioElement.muted = !muted;
    }

    togglePlay() {
      const { audioElement } = this;
      if (audioElement.paused) {
        audioElement.play();
      } else {
        audioElement.pause();
      }
    }

      const { audioUrl } = this.props;

      return (
        <div>
          <audio
            id="audio"
            onEnded={onEnded}
            onLoadedMetadata={onLoadedMetadata}
            onLoadStart={onLoadStart}
            onPause={onPause}
            onPlay={onPlay}
            onTimeUpdate={onTimeUpdate}
            onVolumeChange={onVolumeChange}
            ref={(node) => {
              audioElement = node;
            }}
            src={audioUrl}
          />
          <InnerComponent
            {...state}
            {...props}
            changeCurrentTime={changeCurrentTime}
            changeVolume={changeVolume}
            toggleMuted={toggleMuted}
            togglePlay={togglePlay}
          />
        </div>
      );
  }

  return AudioComponent;
};

export default audio;
