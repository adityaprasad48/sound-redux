/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'components/Link';
import { PLAYLIST_PATH } from 'constants/RouterConstants';
import React from 'react';
import getImageUrl from 'utils/ImageUtils';

interface NavPlaylistsItemProps {
  navigateTo: any;
  playlist: any;
}

const NavPlaylistsItem = ({ navigateTo, playlist }: NavPlaylistsItemProps) => {
  const { id, title, tracks } = playlist;

  return (
    <Link
      className="nav-playlists__item"
      key={id}
      keys={{ id }}
      navigateTo={navigateTo}
      path={PLAYLIST_PATH}
    >
      <div className="nav-playlists__item__main">
        <div className="nav-playlists__item__title">{title}</div>
        <div className="nav-playlists__item__meta">
          {`${tracks.length} Song${tracks.length === 1 ? '' : 's'}`}
        </div>
      </div>
      <div className="nav-playlists__item__songs">
        {tracks.slice(0, 5).map((song) => (
          <div
            className="nav-playlists__item__song"
            key={song.id}
            style={{ backgroundImage: `url(${getImageUrl(song.artworkUrl)})` }}
          />
        ))}
      </div>
    </Link>
  );
};

export default NavPlaylistsItem;
