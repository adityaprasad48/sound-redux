interface Props {
  id: number;
  isFollowing: boolean;
  toggleFollow: any;
}

const UserFollowButton = ({ id, isFollowing, toggleFollow }: Props) => {
  const handleClick = () => {
    toggleFollow(id, !isFollowing);
  };

  return (
    <div
      className={`user-follow-button button button--short ${
        isFollowing ? 'button--red' : ''
      }`}
      onClick={handleClick}
      role="button"
      aria-hidden
      tabIndex={0}
    >
      {isFollowing ? 'Following' : 'Follow'}
    </div>
  );
};

export default UserFollowButton;
