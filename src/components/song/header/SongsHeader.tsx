import React from 'react';
import SongsHeaderGenres from './SongsHeaderGenres';
import SongsHeaderTimes from './SongsHeaderTimes';


interface Props {
  genre: string;
  genres: any;
  navigateTo: any;
  search: string;
  showLikes: boolean;
  showPlaylist: boolean;
  showStream: boolean;
  sticky: boolean;
  time: string;
  times: any;
}

const SongsHeader = ({
  genre,
  genres,
  navigateTo,
  search,
  showLikes,
  showPlaylist,
  showStream,
  sticky,
  time,
  times,
}: Props) => {
  if (showLikes || showStream || showPlaylist) {
    return null;
  }

  return (
    <div className={`songs-header ${sticky ? 'songs-header--sticky' : ''}`}>
      <div className="songs-header__inner">
        <div className="songs-header__sections container">
          <div className="songs-header__section songs-header__section--genres">
            <SongsHeaderGenres
              genre={genre}
              genres={genres}
              navigateTo={navigateTo}
              time={time}
            />
          </div>
          <div className="songs-header__section songs-header__section--time">
            <SongsHeaderTimes
              genre={genre}
              navigateTo={navigateTo}
              search={search}
              time={time}
              times={times}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SongsHeader;
