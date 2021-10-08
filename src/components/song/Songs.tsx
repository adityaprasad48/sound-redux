import InfiniteScroll from 'components/InfiniteScroll';
import stickyOnScroll from 'components/stickyOnScroll';
import React from 'react';
import SongsBody from './body/SongsBody';
import SongsHeader from './header/SongsHeader';

const defaultProps = {
  playingSongId: null,
  playlistUrl: null,
  playlistNextUrl: null,
  time: null,
};

interface Props {
  fetchSongsIfNeeded: any;
  fetchSongsNext: any;
  genre: string;
  genres: any;
  height: number;
  isAuthenticated: boolean;
  isFetching: boolean;
  isMobile: boolean;
  isPlaying: boolean;
  likes: any;
  login: any;
  navigateTo: any;
  playSong: any;
  playingSongId?: number;
  playlist: string;
  playlistNextUrl?: string;
  playlistUrl?: string;
  search: string;
  showLikes: boolean;
  showPlaylist: boolean;
  showStream: boolean;
  sticky: boolean;
  songs: any;
  time: string;
  times: any;
  toggleLike: any;
}

const Songs = ({
  fetchSongsNext,
  genre,
  genres,
  height,
  isAuthenticated,
  isFetching,
  isMobile,
  isPlaying,
  navigateTo,
  likes,
  login,
  playingSongId,
  playlist,
  playlistNextUrl,
  playSong,
  search,
  showLikes,
  showPlaylist,
  showStream,
  sticky,
  songs,
  time,
  times,
  toggleLike,
}: Props) => {
  // componentWillMount() {
  //   const { fetchSongsIfNeeded, playlist, playlistUrl } = this.props;
  //   fetchSongsIfNeeded(playlist, playlistUrl);
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { fetchSongsIfNeeded, playlist } = this.props;
  //   if (playlist !== nextProps.playlist) {
  //     fetchSongsIfNeeded(nextProps.playlist, nextProps.playlistUrl);
  //   }
  // }

  console.log('songs');

  return (
    <InfiniteScroll
      args={[playlist, playlistNextUrl]}
      onScroll={fetchSongsNext}
    >
      <SongsHeader
        genre={genre}
        genres={genres}
        navigateTo={navigateTo}
        search={search}
        showLikes={showLikes}
        showPlaylist={showPlaylist}
        showStream={showStream}
        sticky={sticky}
        time={time}
        times={times}
      />
      <div className="container">
        <SongsBody
          height={height}
          isAuthenticated={isAuthenticated}
          isFetching={isFetching}
          isMobile={isMobile}
          isPlaying={isPlaying}
          likes={likes}
          login={login}
          navigateTo={navigateTo}
          playingSongId={playingSongId}
          playlist={playlist}
          playSong={playSong}
          songs={songs}
          toggleLike={toggleLike}
        />
      </div>
    </InfiniteScroll>
  );
};

export default stickyOnScroll(Songs, 50);
