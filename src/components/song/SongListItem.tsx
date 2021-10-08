/* eslint-disable jsx-a11y/anchor-is-valid */
import ArtworkPlay from 'components/ArtworkPlay';
import Link from 'components/Link';
import Stats from 'components/Stats';
import Waveform from 'components/wave/Waveform';
import IMAGE_SIZES from 'constants/ImageConstants';
import { USER_PATH } from 'constants/RouterConstants';
import React from 'react';
import getImageUrl from 'utils/ImageUtils';

interface Props {
  index: number;
  isActive: boolean;
  isAuthenticated: boolean;
  liked: boolean;
  login: any;
  navigateTo: any;
  player: any;
  playlist: string;
  playSong: any;
  song: any;
  toggleLike: any;
}

const SongListItem = ({
  index,
  isActive,
  isAuthenticated,
  liked,
  login,
  navigateTo,
  player,
  playlist,
  playSong,
  song,
  toggleLike,
}: Props) => {
  const { isPlaying } = player;
  const {
    artworkUrl,
    commentCount,
    favoritingsCount,
    id,
    playbackCount,
    title,
    user,
  } = song;
  const { avatarUrl, username } = user;

  return (
    <div
      className={`song-list__item ${isActive ? 'song-list__item--active' : ''}`}
    >
      <div className="song-list__item__artwork">
        <div
          className="song-list__item__artwork__image"
          style={{
            backgroundImage: `url(${getImageUrl(
              artworkUrl,
              IMAGE_SIZES.LARGE
            )})`,
          }}
        >
          <ArtworkPlay
            index={index}
            isActive={isActive}
            isPlaying={isPlaying}
            playlist={playlist}
            playSong={playSong}
          />
        </div>
      </div>
      <div className="song-list__item__main">
        <Link
          className="song-list__item__title"
          navigateTo={navigateTo}
          keys={{ id }}
        >
          {title}
        </Link>
        <div className="song-list__item__meta">
          <div className="song-list__item__user">
            <div
              className="song-list__item__user__avatar"
              style={{ backgroundImage: `url(${getImageUrl(avatarUrl)})` }}
            />
            <Link
              className="song-list__item__user__username"
              navigateTo={navigateTo}
              keys={{ id: user.id }}
              path={USER_PATH}
            >
              {username}
            </Link>
          </div>
          <Stats
            className="song-list__item__stats"
            commentCount={commentCount}
            favoritingsCount={favoritingsCount}
            id={id}
            isAuthenticated={isAuthenticated}
            liked={liked}
            login={login}
            playbackCount={playbackCount}
            toggleLike={toggleLike}
          />
        </div>
      </div>
      <Waveform
        className="song-list__item__waveform"
        index={index}
        isActive={isActive}
        player={player}
        playlist={playlist}
        playSong={playSong}
        song={song}
      />
    </div>
  );
};

export default SongListItem;
