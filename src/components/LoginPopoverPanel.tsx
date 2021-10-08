import React from 'react';

interface Props {
  login: any;
}

const LoginPopoverPanel = ({ login }: Props) => (
  <div
    className="button button--orange button--block button--margin"
    onClick={login}
    role="button"
    tabIndex={0}
    aria-hidden
  >
    Sign into SoundCloud
  </div>
);

export default LoginPopoverPanel;
