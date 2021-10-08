/* global window */

import PropTypes from 'prop-types';
import React, { Component } from 'react';
import Loader from '../../Loader';
import SongsBodyRendered from '../components/SongsBodyRendered';
import scrollState from '../utils/ScrollUtils';

const defaultProps = {
  playingSongId: null,
};

const propTypes = {
  height: any,
  isAuthenticated: any,
  isFetching: any,
  isMobile: any,
  isPlaying: any,
  likes: anysRequired,
  login: any,
  navigateTo: any,
  playingSongId: any ,
   playlist: any,
  playSong: any,
  songs: anyisRequired,
  toggleLike: any,
};

class SongBody extends Component {
  constructor(props) {
    super(props);
    this.onScroll = this.onScroll.bind(this);

    this.state = scrollState(props.height, props.songs.length, props.isMobile);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.onScroll, false);
  }

  componentWillReceiveProps(nextProps) {
    const { height, songs } = this.props;
    if (height !== nextProps.height || songs.length !== nextProps.songs.length) {
      this.setState(scrollState(nextProps.height, nextProps.songs.length, nextProps.isMobile));
    }
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const { height, isMobile, songs } = this.props;
    this.setState(scrollState(height, songs.length, isMobile));
  }

  render() {
    const {
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
    } = this.props;
    const { end, paddingBottom, paddingTop, start } = this.state;

    return (
      <div className="songs-body">
        <div className="songs-body__padder" style={{ height: `${paddingTop}px` }} />
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
        <div className="songs-body__padder" style={{ height: `${paddingBottom}px` }} />
        <Loader className="loader--full" isLoading={isFetching} />
      </div>
    );
  }
}



export default SongBody;
