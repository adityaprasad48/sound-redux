import React from 'react';
import { addCommas } from '../utils/NumberUtils';
import Heart from './heart/Heart';

interface StateProps {
  className?: string;
  commentCount: number;
  favoritingsCount: number;
  id: number;
  isAuthenticated: boolean;
  liked: boolean;
  login: any;
  playbackCount: number;
  toggleLike: any;
}

const Stats = ({
  className,
  commentCount,
  id,
  isAuthenticated,
  favoritingsCount,
  liked,
  login,
  playbackCount,
  toggleLike,
}: StateProps) => (
  <div className={`stats ${className}`}>
    <Heart
      className="stats__stat stats__stat--heart"
      favoritingsCount={favoritingsCount}
      id={id}
      isAuthenticated={isAuthenticated}
      liked={liked}
      login={login}
      toggleLike={toggleLike}
    />
    <div className="stats__stat">
      <i className="stats__stat__icon ion-play" />
      <span className="stats__stat__text">{addCommas(playbackCount)}</span>
    </div>
    <div className="stats__stat">
      <i className="stats__stat__icon ion-chatbubble" />
      <span className="stats__stat__text">{addCommas(commentCount)}</span>
    </div>
  </div>
);

export default Stats;
