import React from 'react';
import { addCommas } from 'utils/NumberUtils';

interface HeartCountProps {
  favoritingsCount: Number;
}

const HeartCount = ({ favoritingsCount = 0 }) => {
  if (favoritingsCount) {
    return <div className="heart__count">{addCommas(favoritingsCount)}</div>;
  }

  return null;
};

export default HeartCount;
