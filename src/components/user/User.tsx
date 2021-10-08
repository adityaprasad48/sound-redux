import Loader from 'components/Loader';
import SongList from 'components/song/SongList';
import stickyOnScroll from 'components/stickyOnScroll';
import React from 'react';
import UserFollowings from './UserFollowings';
import UserMain from './UserMain';


const defaultProps = {
  playingSongId: null,
  user: null,
};

interface Props {
  fetchUserIfNeeded: any;
  followings: any;
  id: number;
  isAuthenticated: boolean;
  isFollowing: boolean;
  likes: any;
  login: any;
  navigateTo: any;
  player: any;
  playingSongId?: number;
  playlist: string;
  playSong: any;
  profiles: any;
  shouldFetchUser: boolean;
  sidebarHeight: number;
  sticky: boolean;
  songs: any;
  toggleFollow: any;
  toggleLike: any;
  user?: any;
}

const User = ({
  followings,
  isAuthenticated,
  isFollowing,
  likes,
  login,
  navigateTo,
  player,
  playlist,
  playingSongId,
  playSong,
  profiles,
  shouldFetchUser,
  sidebarHeight,
  sticky,
  songs,
  toggleFollow,
  toggleLike,
  user,
}: Props) => {
  // componentWillMount() {
  //   const { fetchUserIfNeeded, id, playlist, shouldFetchUser } = this.props;
  //   fetchUserIfNeeded(shouldFetchUser, id, playlist);
  // }

  // componentWillReceiveProps(nextProps) {
  //   const { fetchUserIfNeeded, id } = this.props;
  //   if (nextProps.id !== id) {
  //     fetchUserIfNeeded(
  //       nextProps.shouldFetchUser,
  //       nextProps.id,
  //       nextProps.playlist
  //     );
  //   }
  // }

  if (shouldFetchUser) {
    return <Loader className="loader--full" isLoading />;
  }

  return (
    <div className="container">
      <div className="user content">
        <div className="user__main">
          <UserMain
            isFollowing={isFollowing}
            profiles={profiles}
            toggleFollow={toggleFollow}
            user={user}
          />
          <SongList
            className="user__song-list"
            isAuthenticated={isAuthenticated}
            likes={likes}
            login={login}
            navigateTo={navigateTo}
            player={player}
            playingSongId={playingSongId}
            playlist={playlist}
            playSong={playSong}
            songs={songs}
            toggleLike={toggleLike}
          />
        </div>
        <div className="user__sidebar">
          <UserFollowings
            followings={followings}
            navigateTo={navigateTo}
            sidebarHeight={sidebarHeight}
            sticky={sticky}
          />
        </div>
      </div>
    </div>
  );
};

export default stickyOnScroll(User, 50);
