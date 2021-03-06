/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { SONG_PATH, USER_PATH } from '../constants/RouterConstants';
import { formatSeconds } from '../utils/NumberUtils';
import volumeClassName from '../utils/PlayerUtils';
import audio from './audio';
import Link from './Link';
import Slider from './Slider';

interface Props {
  changeCurrentTime: any;
  changeVolume: any;
  navigateTo: any;
  player: any;
  playNextSongFromButton: any;
  playPrevSong: any;
  showHistory: boolean;
  song: any;
  toggleMuted: any;
  togglePlay: any;
  toggleRepeat: any;
  toggleShowHistory: any;
  toggleShuffle: any;
}

const Player = ({
  changeCurrentTime,
  changeVolume,
  navigateTo,
  player,
  playNextSongFromButton,
  playPrevSong,
  showHistory,
  song,
  toggleMuted,
  togglePlay,
  toggleRepeat,
  toggleShowHistory,
  toggleShuffle,
}: Props) => {
  const { currentTime, duration, isPlaying, muted, repeat, shuffle } = player;
  const { artworkUrl, id, title, user } = song;
  const { username } = user;
  const volume = muted ? 0 : player.volume;

  return (
    <div className="player">
      <div className="player__inner container">
        <div className="player__section player__section--song">
          <div className="player__song">
            <div
              className="player__song__artwork"
              style={{ backgroundImage: `url(${artworkUrl})` }}
            />
            <div className="player__song__main">
              <Link
                className="player__song__title"
                navigateTo={navigateTo}
                keys={{ id }}
                path={SONG_PATH}
              >
                {title}
              </Link>
              <Link
                className="player__song__username"
                navigateTo={navigateTo}
                keys={{ id: user.id }}
                path={USER_PATH}
              >
                {username}
              </Link>
            </div>
          </div>
        </div>
        <div className="player__section">
          <div className="player__buttons">
            <div
              className="player__button"
              onClick={playPrevSong}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i className="player__button__icon ion-ios-rewind" />
            </div>
            <div
              className="player__button"
              onClick={togglePlay}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i
                className={`player__button__icon ion-ios-${
                  isPlaying ? 'pause' : 'play'
                }`}
              />
            </div>
            <div
              className="player__button"
              onClick={playNextSongFromButton}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i className="player__button__icon ion-ios-fastforward" />
            </div>
          </div>
        </div>
        <div className="player__section player__section--seek">
          <Slider
            max={duration}
            onChange={changeCurrentTime}
            value={currentTime}
          />
        </div>
        <div className="player__section player__section--time">
          <div className="player__time">
            {formatSeconds(currentTime)}
            <div className="player__time__separator">/</div>
            {formatSeconds(duration)}
          </div>
        </div>
        <div className="player__section player__section--options">
          <div className="player__buttons player__buttons--options">
            <div
              className={`player__button ${
                repeat ? 'player__button--active' : ''
              }`}
              onClick={toggleRepeat}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i className="player__button__icon ion-loop" />
            </div>
            <div
              className={`player__button ${
                shuffle ? 'player__button--active' : ''
              }`}
              onClick={toggleShuffle}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i className="player__button__icon ion-shuffle" />
            </div>
            <div
              className={`player__button ${
                showHistory ? 'player__button--active' : ''
              }`}
              onClick={toggleShowHistory}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i className="player__button__icon ion-android-list" />
            </div>
            <div
              className="player__button player__button--volume"
              onClick={toggleMuted}
              role="button"
              tabIndex={0}
              aria-hidden
            >
              <i
                className={`player__button__icon ion-android-volume-${
                  muted ? 'off' : 'mute'
                }`}
              />
              <i
                className={`player__button__icon player__button__icon--absolute ${volumeClassName(
                  volume
                )}`}
              />
            </div>
          </div>
        </div>
        <div className="player__section player__section--volume">
          <Slider max={1} onChange={changeVolume} value={volume} />
        </div>
      </div>
    </div>
  );
};

export default audio(Player);
