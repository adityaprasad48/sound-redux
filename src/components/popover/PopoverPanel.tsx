/* global document */
import React from 'react';

interface PopoverPanelProps  {
  children: any,
  toggleIsOpen:any,
};

const PopoverPanel  = ({children, toggleIsOpen}:PopoverPanelProps) => {
  

  componentDidMount() {
    document.addEventListener('click', this.onClick);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.onClick);
  }

  const handleClick = (e:any) => {
    const { target } = e;
    const { tagName } = target;
    const role = target.getAttribute('role');

    const outsideClick = !this.node.contains(target);
    const targetIsButton = role === 'button';
    const targetIsLink = role === 'link' || tagName === 'A';

    if (outsideClick || targetIsButton || targetIsLink) {
      toggleIsOpen();
    }
  }

    return (
      <div className="popover__panel" ref={(node) => { this.node = node; }}>
        {children}
      </div>
    );
}


export default PopoverPanel;
