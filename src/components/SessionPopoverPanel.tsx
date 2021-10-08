import React from 'react';

interface SessionPopoverPanel {
  logout: any;
}

const SessionPopoverPanel = ({ logout }: SessionPopoverPanel) => (
  <div
    className="popover__panel__item"
    onClick={logout}
    role="button"
    tabIndex={0}
    aria-hidden
  >
    Logout
  </div>
);

export default SessionPopoverPanel;
