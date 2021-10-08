import Loader from 'components/Loader';
import stickyOnScroll from 'components/stickyOnScroll';
import React from 'react';
import SongComments from './comments/SongComments';
import SongList from './SongList';
import SongMain from './SongMain';

interface SongProps {
  comments: any;
  fetchSongIfNeeded: any;
  id: number;
  isAuthenticated: boolean;
  likes: any;
  login: any;
  navigateTo: any;
  player: any;
  playingSongId?: number;
  playlist: string;
  playSong: any;
  sidebarHeight: number;
  song?: any;
  songs: any;
  sticky: boolean;
  timed: boolean;
  toggleLike: any;
}

const Song = ({
  comments,
  id,
  isAuthenticated,
  likes,
  login,
  navigateTo,
  playlist,
  player,
  playingSongId,
  playSong,
  sidebarHeight,
  song,
  songs,
  sticky,
  timed,
  toggleLike,
}: SongProps) => {
  // componentWillMount() {
  //   const { fetchSongIfNeeded, id, playlist } = this.props;
  //   fetchSongIfNeeded(id, playlist);
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { fetchSongIfNeeded, id } = this.props;
  //   if (nextProps.id !== id) {
  //     fetchSongIfNeeded(nextProps.id, nextProps.playlist);
  //   }
  // }

  if (!song) {
    return <Loader className="loader--full" isLoading />;
  }

  return (
    <div className="container">
      <div className="song content">
        <div className="song__main">
          <SongMain
            isActive={playingSongId === id}
            isAuthenticated={isAuthenticated}
            liked={Boolean(id in likes && likes[id])}
            login={login}
            navigateTo={navigateTo}
            player={player}
            playlist={playlist}
            playSong={playSong}
            song={song}
            toggleLike={toggleLike}
          />
          <SongList
            className="song__song-list"
            id={id}
            isAuthenticated={isAuthenticated}
            likes={likes}
            login={login}
            navigateTo={navigateTo}
            offsetIndex={1}
            player={player}
            playingSongId={playingSongId}
            playlist={playlist}
            playSong={playSong}
            songs={songs}
            toggleLike={toggleLike}
          />
        </div>
        <div className="song__sidebar">
          <SongComments
            comments={comments}
            id={id}
            navigateTo={navigateTo}
            sidebarHeight={sidebarHeight}
            sticky={sticky}
            timed={timed}
          />
        </div>
      </div>
    </div>
  );
};

export default stickyOnScroll(Song, 50);
