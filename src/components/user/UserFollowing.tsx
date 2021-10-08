/* eslint-disable jsx-a11y/anchor-is-valid */
import Link from 'components/Link';
import { USER_PATH } from 'constants/RouterConstants';
import React from 'react';
import getImageUrl from 'utils/ImageUtils';
import { addCommas } from 'utils/NumberUtils';
import { getLocation } from 'utils/UserUtils';

interface Props {
  navigateTo: any;
  following: any;
}

const UserFollowing = ({ following, navigateTo }: Props) => {
  const { avatarUrl, followersCount, id, username } = following;

  return (
    <div className="user-following">
      <div
        className="user-following__avatar"
        style={{ backgroundImage: `url(${getImageUrl(avatarUrl)})` }}
      />
      <div className="user-following__main">
        <Link
          className="user-following__username"
          keys={{ id }}
          navigateTo={navigateTo}
          path={USER_PATH}
        >
          {username}
        </Link>
        <div className="user-following__location">
          <i className="user-following__location__icon ion-location" />
          <div className="user-following__location__text">
            {getLocation(following)}
          </div>
        </div>
      </div>
      <div className="user-following__followers">
        <div className="user-following__followers__count">
          {addCommas(followersCount)}
        </div>
        <div className="user-following__followers__text">Followers</div>
      </div>
    </div>
  );
};

export default UserFollowing;
