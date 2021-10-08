import IMAGE_SIZES from 'constants/ImageConstants';
import React from 'react';
import getImageUrl from 'utils/ImageUtils';
import { formatSeconds } from 'utils/NumberUtils';


interface SongCommentProps {
  comment: any;
  index: number;
}

const SongComment = ({ comment, index }: SongCommentProps) => {
  const { body, unixTimestamp, user } = comment;
  const { avatarUrl, username } = user;

  return (
    <div className="song-comment" style={{ animationDelay: `${index * 50}ms` }}>
      <div
        className="song-comment__image"
        style={{
          backgroundImage: `url(${getImageUrl(avatarUrl, IMAGE_SIZES.LARGE)})`,
        }}
      />
      <div className="song-comment__main">
        <div className="song-comment__body">{body}</div>
        <div className="song-comment__username">{username}</div>
      </div>
      <div className="song-comment__time">{formatSeconds(unixTimestamp)}</div>
    </div>
  );
};

export default SongComment;
