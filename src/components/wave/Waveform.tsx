import { useState } from 'react';
import offsetLeft from 'utils/DomUtils';
import WaveformEvents from './WaveformEvents';
/* global document */

const defaultProps = {
  className: '',
};

interface Props {
  className?: string;
  index: number;
  isActive: boolean;
  player: any;
  playlist: string;
  playSong: any;
  song: any;
}

const Waveform = ({
  className,
  isActive,
  player,
  song,
  playSong,
  playlist,
  index,
}: Props) => {
  const [seek, setSeek] = useState(0);

  const handlMouseMove = (e: any) => {
    const seek =
      ((e.clientX - offsetLeft(e.currentTarget)) /
        e.currentTarget.offsetWidth) *
      100;
    setSeek(seek);
  };

  const handlePlaySong = () => {
    playSong(playlist, index);
  };

  const handleSeek = () => {
    const audioElement:any = document.getElementById('audio')!;
    const { duration } = song;
    const currentTime = Math.floor((seek / 100) * (duration / 1000));
    audioElement.currentTime = currentTime;
  };

  const { currentTime } = player;
  const { duration, waveformUrl } = song;
  const width = isActive ? (currentTime / (duration / 1000)) * 100 : 0;

  return (
    <div
      className={`waveform ${isActive ? 'waveform--active' : ''} ${className}`}
    >
      <div
        className="waveform__image"
        style={{ backgroundImage: `url(${waveformUrl})` }}
      />
      <div className="waveform__bg" style={{ width: `${width}%` }} />
      <div className="waveform__seek-bg" style={{ width: `${seek}%` }} />
      <div className="waveform__hover-icon">
        <i className="ion-ios-play" />
      </div>
      <div className="waveform__hover-bg" />
      <div className="waveform__seek-line" style={{ width: `${seek}%` }} />
      <WaveformEvents
        isActive={isActive}
        onMouseMove={handlMouseMove}
        playSong={handlePlaySong}
        seek={seek}
      />
    </div>
  );
};

export default Waveform;
