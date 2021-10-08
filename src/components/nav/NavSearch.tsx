/* global document */
import { SONGS_PATH } from 'constants/RouterConstants';
import React, { useCallback, useEffect, useRef } from 'react';

interface NavSearchProps {
  navigateTo: any;
}

const NavSearch = ({ navigateTo }: NavSearchProps) => {

  const inputRef = useRef<any>('')

  const handleKeyPress = useCallback((e: any) => {
    if (e.charCode === 13) {
      const value = e.target.value.trim();
      if (value !== '') {
        navigateTo({
          keys: {},
          path: SONGS_PATH,
          options: { q: value },
        });
      }
    }
  }, []);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  const onKeyDown = (e: any) => {
    if (e.keyCode === 191) {
      const insideInput = e.target.tagName
        .toLowerCase()
        .match(/input|textarea/);
      if (!insideInput) {
        e.preventDefault();
        inputRef.current.focus();
      }
    }
  };

  return (
    <div className="nav-search">
      <i className="nav-search__icon ion-search" />
      <input
        ref={inputRef}
        className="nav-search__input"
        placeholder="SEARCH"
        onKeyPress={handleKeyPress}
        type="text"
      />
    </div>
  );
};

export default NavSearch;
