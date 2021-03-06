/* eslint-disable jsx-a11y/anchor-is-valid */
import { SONGS_PATH } from 'constants/RouterConstants';
import React from 'react';
import Link from '../Link';
import NavSearch from './NavSearch';
import NavSession from './NavSession';
import NavUser from './NavUser';

const defaultProps = {
  navPlaylist: null,
  user: null,
};

interface NavProps {
  fetchNewStreamSongs: any;
  isAuthenticated: boolean;
  loadNewStreamSongs: any;
  login: any;
  logout: any;
  navigateTo: any;
  navPlaylist: any;
  navPlaylists: any;
  newStreamSongs: any;
  showLikes: boolean;
  showPlaylist: boolean;
  showStream: boolean;
  streamFutureUrl: string;
  user: any;
}

const Nav = ({
  fetchNewStreamSongs,
  isAuthenticated,
  loadNewStreamSongs,
  login,
  logout,
  navigateTo,
  navPlaylist,
  navPlaylists,
  newStreamSongs,
  showLikes,
  showPlaylist,
  showStream,
  streamFutureUrl,
  user,
}: NavProps) => (
  <div className="nav">
    <div className="nav__inner container">
      <div className="nav__section">
        <i className="nav__logo__icon ion-radio-waves" />
        <Link
          className="nav__logo__text"
          navigateTo={navigateTo}
          path={SONGS_PATH}
        >
          SoundRedux
        </Link>
      </div>
      <div className="nav__section nav__section--session">
        <NavSession
          fetchNewStreamSongs={fetchNewStreamSongs}
          isAuthenticated={isAuthenticated}
          loadNewStreamSongs={loadNewStreamSongs}
          navigateTo={navigateTo}
          navPlaylist={navPlaylist}
          navPlaylists={navPlaylists}
          newStreamSongs={newStreamSongs}
          showLikes={showLikes}
          showPlaylist={showPlaylist}
          showStream={showStream}
          streamFutureUrl={streamFutureUrl}
        />
      </div>
      <div className="nav__section nav__section--search">
        <NavSearch navigateTo={navigateTo} />
      </div>
      <div className="nav__section nav__section--user">
        <NavUser
          isAuthenticated={isAuthenticated}
          login={login}
          logout={logout}
          showPlaylist={showPlaylist}
          user={user}
        />
      </div>
    </div>
  </div>
);

export default Nav;
