import React from 'react';
import LoginPopoverPanel from '../LoginPopoverPanel';
import Popover from '../popover/Popover';
import HeartCount from './HeartCount';

interface HeartProps {
  className?: string;
  favoritingsCount?: any;
  id: number;
  isAuthenticated: boolean;
  liked: boolean;
  login: any;
  toggleLike: any;
}

const Heart = ({
  className = '',
  favoritingsCount = null,
  isAuthenticated,
  liked,
  login,
  id,
  toggleLike,
}: HeartProps) => {
  const handleClick = () => {
    toggleLike(id, !liked);
  };

  if (!isAuthenticated) {
    return (
      <Popover className={`heart ${className}`}>
        <div className="heart__inner">
          <i className="heart__icon ion-ios-heart" />
          <HeartCount favoritingsCount={favoritingsCount} />
        </div>
        <LoginPopoverPanel login={login} />
      </Popover>
    );
  }

  return (
    <div className={`heart ${liked ? 'heart--liked' : ''} ${className} `}>
      <div
        className="heart__inner"
        onClick={handleClick}
        role="button"
        aria-hidden
        tabIndex={0}
      >
        <i className="heart__icon ion-ios-heart" />
        <HeartCount favoritingsCount={favoritingsCount} />
      </div>
    </div>
  );
};

export default Heart;
