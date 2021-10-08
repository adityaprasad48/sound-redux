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

const SongMain = ({
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
    description,
    favoritingsCount,
    id,
    playbackCount,
    user,
  } = song;
  const { avatarUrl, username } = user;

  return (
    <div className={`song-main ${isActive ? 'song-main--active' : ''}`}>
      <div className="song-main__artwork">
        <div
          className="song-main__artwork__image"
          style={{
            backgroundImage: `url(${getImageUrl(
              artworkUrl,
              IMAGE_SIZES.LARGE
            )})`,
          }}
        >
          <ArtworkPlay
            index={0}
            isActive={isActive}
            isPlaying={isPlaying}
            playlist={playlist}
            playSong={playSong}
          />
        </div>
      </div>
      <div className="song-main__main">
        <div className="song-main__title">{song.title}</div>
        <div className="song-main__user">
          <div
            className="song-main__user__avatar"
            style={{ backgroundImage: `url(${getImageUrl(avatarUrl)})` }}
          />
          <Link
            className="song-main__user__username"
            navigateTo={navigateTo}
            keys={{ id: user.id }}
            path={USER_PATH}
          >
            {username}
          </Link>
        </div>
        <Stats
          className="song-main__stats"
          commentCount={commentCount}
          favoritingsCount={favoritingsCount}
          id={id}
          isAuthenticated={isAuthenticated}
          liked={liked}
          login={login}
          playbackCount={playbackCount}
          toggleLike={toggleLike}
        />
        <div className="song-main__description">{description}</div>
      </div>
      <Waveform
        className="song-main__waveform"
        index={0}
        isActive={isActive}
        player={player}
        playlist={playlist}
        playSong={playSong}
        song={song}
      />
    </div>
  );
};

export default SongMain;
