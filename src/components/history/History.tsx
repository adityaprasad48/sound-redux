import React from 'react';
import HistorySong from './HistorySong';


interface HistoryProps {
  isPlaying: any;
  navigateTo: any;
  playlist: any;
  playingSongId: any;
  playSong: any;
  showHistory: any;
  songs: any;
  toggleShowHistory: any;
}

const History = ({
  isPlaying,
  navigateTo,
  playingSongId,
  playlist,
  playSong,
  showHistory,
  songs,
  toggleShowHistory,
}: HistoryProps) => {
  if (!showHistory) {
    return null;
  }

  return (
    <div className="history">
      <div
        className="history__bg"
        onClick={toggleShowHistory}
        role="button"
        aria-hidden
        tabIndex={0}
      />
      <div className="history__main">
        <div className="history__header">
          <div className="history__header__title">Recently Played</div>
          <div
            className="history__header__button"
            onClick={toggleShowHistory}
            role="button"
            aria-hidden
            tabIndex={0}
          >
            <i className="history__header__button__icon ion-android-close" />
          </div>
        </div>
        <div className="history__body">
          {songs.map((song: any, i: number) => (
            <HistorySong
              index={i}
              isActive={playingSongId === song.id}
              isPlaying={isPlaying}
              key={song.id}
              navigateTo={navigateTo}
              playlist={playlist}
              playSong={playSong}
              song={song}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;
