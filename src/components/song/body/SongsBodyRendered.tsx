import React from 'react';
import SongsBodyCard from './SongsBodyCard';

const defaultProps = {
  playingSongId: null,
};

interface Props {
  end: number;
  isAuthenticated: boolean;
  isPlaying: boolean;
  likes: any;
  login: any;
  navigateTo: any;
  playingSongId?: number;
  playlist: string;
  playSong: any;
  songs: any;
  start: number;
  toggleLike: any;
  isMobile: boolean;
}

const SongsBodyRendered = ({
  end,
  isAuthenticated,
  isPlaying,
  likes,
  login,
  navigateTo,
  playingSongId,
  playlist,
  playSong,
  songs,
  start,
  toggleLike,
}: Props) => {
  const cellsPerRow = 5;
  const { length } = songs;
  const rows = [];

  for (let i = start; i < end; i += cellsPerRow) {
    const row = [];

    for (let j = 0; j < cellsPerRow; j += 1) {
      const index = i + j;
      const song = index < length ? songs[index] : null;

      row.push(
        <div className="row__cell" key={index}>
          {song ? (
            <SongsBodyCard
              index={index}
              isActive={playingSongId === song.id}
              isAuthenticated={isAuthenticated}
              isPlaying={isPlaying}
              liked={Boolean(song.id in likes && likes[song.id])}
              login={login}
              navigateTo={navigateTo}
              playlist={playlist}
              playSong={playSong}
              song={song}
              toggleLike={toggleLike}
            />
          ) : null}
        </div>
      );
    }

    rows.push(
      <div className="row" key={i}>
        {row}
      </div>
    );
  }

  return <div>{rows}</div>;
};

export default SongsBodyRendered;
