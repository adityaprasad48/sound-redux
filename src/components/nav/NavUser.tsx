import LoginPopoverPanel from 'components/LoginPopoverPanel';
import Popover from 'components/popover/Popover';
import SessionPopoverPanel from 'components/SessionPopoverPanel';
import React from 'react';
import getImageUrl from 'utils/ImageUtils';


interface NavUserProps {
  isAuthenticated: boolean;
  login: any;
  logout: any;
  user: any;
  showPlaylist: boolean;
}

const NavUser = ({
  isAuthenticated,
  login,
  logout,
  user = null,
}: NavUserProps) => {
  if (isAuthenticated) {
    const { avatarUrl } = user;
    return (
      <Popover className="nav-user popover--right">
        <div className="nav-user__trigger">
          <div
            className="nav-user__avatar"
            style={{ backgroundImage: `url(${getImageUrl(avatarUrl)})` }}
          />
          <i className="nav-user__chevron ion-chevron-down" />
        </div>
        <SessionPopoverPanel logout={logout} />
      </Popover>
    );
  }

  return (
    <Popover className="nav-user popover--right">
      <div className="nav-user__trigger">
        <i className="nav-user__icon ion-person" />
        <i className="nav-user__chevron ion-chevron-down" />
      </div>
      <LoginPopoverPanel login={login} />
    </Popover>
  );
};

export default NavUser;
