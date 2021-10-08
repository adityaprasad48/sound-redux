/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'components/Link';
import { SONGS_PATH } from 'constants/RouterConstants';
import React from 'react';
import NavPlaylists from './NavPlaylists';
import NavStream from './NavStream';


const defaultProps = {
  navPlaylist: null,
};

interface NavSessionProps {
  fetchNewStreamSongs: any;
  isAuthenticated: boolean;
  loadNewStreamSongs: any;
  navigateTo: any;
  navPlaylist: any;
  navPlaylists: any;
  newStreamSongs: any;
  showLikes: boolean;
  showPlaylist: boolean;
  showStream: boolean;
  streamFutureUrl: string;
}

const NavSession = ({
  fetchNewStreamSongs,
  isAuthenticated,
  loadNewStreamSongs,
  navigateTo,
  navPlaylist,
  navPlaylists,
  newStreamSongs,
  showLikes,
  showPlaylist,
  showStream,
  streamFutureUrl,
}: NavSessionProps) => {
  if (!isAuthenticated) {
    return null;
  }

  return (
    <div className="nav-session">
      <NavStream
        fetchNewStreamSongs={fetchNewStreamSongs}
        loadNewStreamSongs={loadNewStreamSongs}
        navigateTo={navigateTo}
        newStreamSongs={newStreamSongs}
        showStream={showStream}
        streamFutureUrl={streamFutureUrl}
      />
      <Link
        className={`nav-session__item ${
          showLikes ? 'nav-session__item--active' : ''
        }`}
        navigateTo={navigateTo}
        path={SONGS_PATH}
        options={{ s: 'likes' }}
      >
        Likes
      </Link>
      <NavPlaylists
        navigateTo={navigateTo}
        navPlaylist={navPlaylist}
        navPlaylists={navPlaylists}
        showPlaylist={showPlaylist}
      />
    </div>
  );
};

export default NavSession;
