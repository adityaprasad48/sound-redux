/* eslint-disable jsx-a11y/anchor-is-valid */

import ArtworkPlay from "components/ArtworkPlay";
import Heart from "components/heart/Heart";
import Link from "components/Link";
import IMAGE_SIZES from "constants/ImageConstants";
import { SONG_PATH, USER_PATH } from "constants/RouterConstants";
import getImageUrl from "utils/ImageUtils";
import formatSongTitle from "utils/SongUtils";
import SongsBodyCardMobileEvents from "./SongsBodyCardMobileEvents";


interface SongsBodyCardProps {
  index: number;
  isActive: boolean;
  isAuthenticated: boolean;
  isPlaying: boolean;
  liked: boolean;
  login:any;
  navigateTo:any;
  playlist: string;
  playSong:any;
  song: any;
  toggleLike:any;
};

const SongsBodyCard = ({
  index,
  isActive,
  isAuthenticated,
  isPlaying,
  liked,
  login,
  navigateTo,
  playlist,
  playSong,
  song,
  toggleLike,
}:SongsBodyCardProps) => {
  const { artworkUrl, id, title, user } = song;
  const { avatarUrl, username } = user;

  return (
    <div className={`songs-body-card ${isActive ? 'songs-body-card--active' : ''}`}>
      <div className="songs-body-card__inner">
        <div
          className="songs-body-card__artwork"
          style={{
            backgroundImage: `url(${getImageUrl(artworkUrl, IMAGE_SIZES.LARGE)})`,
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
        <div className="songs-body-card__main">
          <div
            className="songs-body-card__avatar"
            style={{
              backgroundImage: `url(${getImageUrl(avatarUrl)})`,
            }}
          />
          <div className="songs-body-card__details">
            <Link
              className="songs-body-card__title"
              keys={{ id }}
              navigateTo={navigateTo}
              path={SONG_PATH}
              title={title}
            >
              {formatSongTitle(title)}
            </Link>
            <Link
              className="songs-body-card__username"
              keys={{ id: user.id }}
              navigateTo={navigateTo}
              path={USER_PATH}
              title={username}
            >
              {username}
            </Link>
          </div>
        </div>
        <Heart
          className="songs-body-card__heart popover--right"
          id={id}
          isAuthenticated={isAuthenticated}
          liked={liked}
          login={login}
          toggleLike={toggleLike}
        />
      </div>
      <SongsBodyCardMobileEvents
        index={index}
        isActive={isActive}
        playlist={playlist}
        playSong={playSong}
      />
    </div>
  );
};


export default SongsBodyCard;
