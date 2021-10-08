/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'components/Link';
import { SONGS_PATH } from 'constants/RouterConstants';
import React, { useEffect } from 'react';


interface NavStreamProps {
  fetchNewStreamSongs: any;
  loadNewStreamSongs: any;
  navigateTo: any;
  newStreamSongs: any;
  showStream: any;
  streamFutureUrl: string;
}

const NavStream = ({
  fetchNewStreamSongs,
  loadNewStreamSongs,
  navigateTo,
  newStreamSongs,
  showStream,
  streamFutureUrl,
}: NavStreamProps) => {
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (streamFutureUrl) {
        fetchNewStreamSongs(streamFutureUrl);
      } 
    }, 60000);

    return () => clearInterval(intervalId);
  }, [fetchNewStreamSongs, streamFutureUrl]);

  const handleClick = () => {
    loadNewStreamSongs(newStreamSongs);
  };

  const newStreamSongsCount = newStreamSongs.length;

  return (
    <Link
      className={`nav-session__item ${
        showStream ? 'nav-session__item--active' : ''
      }`}
      navigateTo={navigateTo}
      onClick={handleClick}
      options={{ s: 'stream' }}
      path={SONGS_PATH}
    >
      Stream
      {newStreamSongsCount ? (
        <div className="nav-session__item__badge">
          <div className="nav-session__item__badge__text">
            {newStreamSongsCount}
          </div>
        </div>
      ) : null}
    </Link>
  );
};

export default NavStream;
