import SidebarBody from 'components/SidebarBody';
import Switch from 'components/Switch';
import { SONG_PATH } from 'constants/RouterConstants';
import SongComment from './SongComment';

interface Props {
  comments: any;
  id: number;
  navigateTo: any;
  sidebarHeight: number;
  sticky: boolean;
  timed: boolean;
}

const SongComments = ({
  comments,
  id,
  navigateTo,
  sidebarHeight,
  sticky,
  timed,
}: Props) => (
  <div
    className={`sidebar ${sticky ? 'sidebar--sticky' : ''}`}
    style={{ height: `${sidebarHeight}px` }}
  >
    <div className="sidebar__header">
      <div className="sidebar__header__left">Comments</div>
      <div className="sidebar__header__right">
        <Switch
          args={[
            {
              path: SONG_PATH,
              keys: { id },
              options: timed ? {} : { timed: '1' },
            },
          ]}
          on={timed}
          onClick={navigateTo}
        />
      </div>
    </div>
    <SidebarBody>
      {comments.map((comment: any, i: any) => (
        <SongComment comment={comment} key={comment.id} index={i} />
      ))}
    </SidebarBody>
  </div>
);

export default SongComments;
