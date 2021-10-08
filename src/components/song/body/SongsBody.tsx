/* global window */

import React, { useState } from 'react';
import scrollState from 'utils/ScrollUtils';
import Loader from '../../Loader';
import SongsBodyRendered from './SongsBodyRendered';

const defaultProps = {
  playingSongId: null,
};

interface Props {
  height: any;
  isAuthenticated: any;
  isFetching: any;
  isMobile: any;
  isPlaying: any;
  likes: any;
  login: any;
  navigateTo: any;
  playingSongId: any;
  playlist: any;
  playSong: any;
  songs: any;
  toggleLike: any;
}

const SongBody = ({
  isAuthenticated,
  isFetching,
  isMobile,
  isPlaying,
  likes,
  login,
  navigateTo,
  playingSongId,
  playlist,
  playSong,
  songs,
  toggleLike,
  height,
}: Props) => {
  const [scrolledState, setScrolledState] = useState<any>(
    scrollState(height, songs.length, isMobile)
  );
  // this.state =  scrollState(props.height, props.songs.length, props.isMobile);

  // componentDidMount() {
  //   window.addEventListener('scroll', this.onScroll, false);
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { height, songs } = this.props;
  //   if (height !== nextProps.height || songs.length !== nextProps.songs.length) {
  //     this.setState(scrollState(nextProps.height, nextProps.songs.length, nextProps.isMobile));
  //   }
  // }

  // componentWillUnmount() {
  //   window.removeEventListener('scroll', this.onScroll, false);
  // }

  const handleScroll = () => {
    setScrolledState(scrollState(height, songs.length, isMobile));
  };

  const { end, paddingBottom, paddingTop, start } = scrolledState;

  return (
    <div className="songs-body">
      <div
        className="songs-body__padder"
        style={{ height: `${paddingTop}px` }}
      />
      <SongsBodyRendered
        end={end}
        isAuthenticated={isAuthenticated}
        isMobile={isMobile}
        isPlaying={isPlaying}
        likes={likes}
        login={login}
        navigateTo={navigateTo}
        playingSongId={playingSongId}
        playlist={playlist}
        playSong={playSong}
        songs={songs}
        start={start}
        toggleLike={toggleLike}
      />
      <div
        className="songs-body__padder"
        style={{ height: `${paddingBottom}px` }}
      />
      <Loader className="loader--full" isLoading={isFetching} />
    </div>
  );
};

export default SongBody;
