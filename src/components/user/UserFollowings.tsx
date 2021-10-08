import SidebarBody from 'components/SidebarBody';
import React from 'react';
import UserFollowing from './UserFollowing';


interface Props {
  followings: any;
  navigateTo: any;
  sidebarHeight: number;
  sticky: boolean;
}

const UserFollowings = ({
  followings,
  navigateTo,
  sidebarHeight,
  sticky,
}: Props) => (
  <div
    className={`sidebar ${sticky ? 'sidebar--sticky' : ''}`}
    style={{ height: `${sidebarHeight}px` }}
  >
    <div className="sidebar__header">
      <div className="sidebar__header__left">
        {`Following ${followings.length} User${
          followings.length === 1 ? '' : 's'
        }`}
      </div>
    </div>
    <SidebarBody>
      {followings.map((following: any) => (
        <UserFollowing
          following={following}
          key={following.id}
          navigateTo={navigateTo}
        />
      ))}
    </SidebarBody>
  </div>
);

export default UserFollowings;
