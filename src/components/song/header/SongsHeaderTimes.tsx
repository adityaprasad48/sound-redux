/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'components/Link';
import { SONGS_PATH } from 'constants/RouterConstants';
import React from 'react';


interface Props {
  genre: string;
  navigateTo: any;
  search: string;
  time: string;
  times: any;
}

const SongsHeaderTimes = ({
  genre,
  navigateTo,
  search,
  time,
  times,
}: Props) => (
  <div className="songs-header__times">
    <div className="songs-header__times__inner">
      <i className="songs-header__times__icon ion-funnel" />
      {times.map((t:any) => (
        <Link
          className={`songs-header__time ${
            t.key === time ? 'songs-header__time--active' : ''
          }`}
          key={t.key}
          navigateTo={navigateTo}
          options={{
            ...(time !== t.key ? { t: t.key } : {}),
            ...(genre ? { g: genre } : {}),
            ...(search ? { q: search } : {}),
          }}
          path={SONGS_PATH}
        >
          {t.label}
        </Link>
      ))}
    </div>
  </div>
);

export default SongsHeaderTimes;
