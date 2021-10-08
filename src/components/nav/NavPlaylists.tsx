import Popover from 'components/popover/Popover';
import React from 'react';
import NavPlaylistsItem from './NavPlaylistsItem';

interface NavPlaylistsProps {
  navigateTo: any;
  navPlaylist: any;
  navPlaylists: any;
  showPlaylist: boolean;
}

const NavPlaylists = ({
  navigateTo,
  navPlaylist,
  navPlaylists = null,
  showPlaylist,
}: NavPlaylistsProps) => (
  <Popover className="nav-playlists">
    <div
      className={`nav-session__item ${
        showPlaylist ? 'nav-session__item--active' : ''
      }`}
    >
      <div className="nav-session__item__text">
        {navPlaylist ? navPlaylist.title : 'Playlists'}
      </div>
      <i className="nav-session__item__icon ion-ios-arrow-down" />
    </div>
    <div className="nav-playlists__panel">
      {navPlaylists.map((playlist: any) => (
        <NavPlaylistsItem
          key={playlist.id}
          navigateTo={navigateTo}
          playlist={playlist}
        />
      ))}
    </div>
  </Popover>
);

export default NavPlaylists;
