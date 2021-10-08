/* eslint-disable jsx-a11y/anchor-is-valid */

import Link from 'components/Link';
import { SONGS_PATH } from 'constants/RouterConstants';
import { useState } from 'react';

interface Props {
  genre: string;
  genres: any;
  navigateTo: any;
  time: string;
}

const SongsHeaderGenres = ({ genre, genres, navigateTo, time }: Props) => {
  const [expanded, setExpanded] = useState(false);

  const handleClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div
      className={`songs-header__genres ${
        expanded ? 'songs-header__genres--expanded' : ''
      }`}
    >
      <div
        className="songs-header__genres__active"
        onClick={handleClick}
        role="button"
        tabIndex={0}
        aria-hidden
      >
        {genre || 'genre'}
      </div>
      <div className="songs-header__genres__main">
        {genres.map((g:any) => (
          <div
            className={`songs-header__genre ${
              g.key === genre ? 'songs-header__genre--active' : ''
            }`}
            key={g.key}
          >
            <Link
              className="songs-header__genre__text"
              navigateTo={navigateTo}
              onClick={handleClick}
              options={{
                g: g.key,
                ...(time ? { t: time } : {}),
              }}
              path={SONGS_PATH}
            >
              {g.key}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SongsHeaderGenres;
