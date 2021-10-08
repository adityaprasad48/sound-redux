import React from 'react';
import SongListItem from './SongListItem';


const defaultProps = {
  className: '',
  offsetIndex: 0,
  id: null,
  playingSongId: null,
};

interface Props {
  className?: string;
  id?: number;
  isAuthenticated: boolean;
  likes: any;
  offsetIndex?: number;
  login: any;
  navigateTo: any;
  player: any;
  playingSongId?: number;
  playlist: string;
  playSong: any;
  songs: any;
  toggleLike: any;
}

const SongList = ({
  className,
  id,
  isAuthenticated,
  likes,
  login,
  navigateTo,
  offsetIndex,
  player,
  playingSongId,
  playlist,
  playSong,
  songs,
  toggleLike,
}: Props) => (
  <div className={`song-list ${className}`}>
    {songs.map((song: any, i: any) =>
      song.id !== id ? (
        <SongListItem
          index={i + offsetIndex}
          isActive={playingSongId === song.id}
          isAuthenticated={isAuthenticated}
          key={song.id}
          liked={Boolean(song.id in likes && likes[song.id])}
          login={login}
          navigateTo={navigateTo}
          player={player}
          playlist={playlist}
          playSong={playSong}
          song={song}
          toggleLike={toggleLike}
        />
      ) : null
    )}
  </div>
);

export default SongList;
