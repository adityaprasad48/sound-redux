import moment from 'moment';
import { denormalize } from 'normalizr';
import {
  SESSION_LIKES_URL,
  SESSION_STREAM_URL,
  SONGS_URL
} from '../constants/ApiConstants';
import {
  GENRE_PLAYLIST_TYPE,
  GENRE_QUERY_MAP,
  PLAYLIST_PLAYLIST_TYPE,
  SEARCH_PLAYLIST_TYPE,
  SESSION_LIKES_PLAYLIST,
  SESSION_STREAM_PLAYLIST
} from '../constants/PlaylistConstants';
import { songSchema } from '../constants/Schemas';

const isFetching = (playlist: any, playlists: any) =>
  playlist in playlists ? playlists[playlist].isFetching : false;

const genrePlaylistUrl = (genre: any, time?: any) => {
  // @ts-ignore
  const genreUriSegment = `&tags=${GENRE_QUERY_MAP[genre] || genre}`;
  const timeUriSegment = time
    ? `&created_at[from]=${moment()
        .subtract(Number(time), 'days')
        .format('YYYY-MM-DD%2012:00:00')}`
    : '';

  return `${SONGS_URL}${timeUriSegment}${genreUriSegment}`;
};

const searchPlaylistUrl = (search: any, time?: any) => {
  const searchUriSegment = `&q=${search}`;
  const timeUriSegment = time
    ? `&created_at[from]=${moment()
        .subtract(Number(time), 'days')
        .format('YYYY-MM-DD%2012:00:00')}`
    : '';

  return `${SONGS_URL}${timeUriSegment}${searchUriSegment}`;
};

const playlistUrl = (playlist: any) => {
  const [type] = playlist.split('|');

  if (SESSION_STREAM_PLAYLIST) {
    return SESSION_STREAM_URL;
  }

  switch (type) {
    case GENRE_PLAYLIST_TYPE:
      return genrePlaylistUrl(playlist);
    case SEARCH_PLAYLIST_TYPE:
      return searchPlaylistUrl(playlist);
    default:
      return '';
  }
};

const playlistNextUrl = (playlist: string, playlists: any, oauthToken?: any) =>
  playlist in playlists && playlists[playlist].nextUrl
    ? `${playlists[playlist].nextUrl}${
        oauthToken ? `&oauth_token=${oauthToken}` : ''
      }`
    : null;

const playlistSongs = (playlist: string, playlists: any, entities?: any) =>
  playlist in playlists
    ? denormalize(playlists[playlist].items, [songSchema], entities)
    : [];

export const playlistData = (
  genre: any,
  search: any,
  showLike: any,
  showPlaylist: any,
  showStream: any,
  time: any,
  entities: any,
  id: any,
  oauthToken: any,
  playlists: any
) => {
  if (showLike) {
    const playlist = SESSION_LIKES_PLAYLIST;
    return {
      isFetching: isFetching(playlist, playlists),
      playlist,
      playlistUrl: `${SESSION_LIKES_URL}?oauth_token=${oauthToken}`,
      playlistNextUrl: null,
      songs: playlistSongs(playlist, playlists, entities),
    };
  }

  if (showPlaylist) {
    const playlist = `${PLAYLIST_PLAYLIST_TYPE}|${id}`;
    return {
      isFetching: isFetching(playlist, playlists),
      playlist,
      playlistUrl: null,
      playlistNextUrl: null,
      songs: playlistSongs(playlist, playlists, entities),
    };
  }

  if (showStream) {
    const playlist = SESSION_STREAM_PLAYLIST;
    return {
      isFetching: isFetching(playlist, playlists),
      playlist,
      playlistUrl: `${SESSION_STREAM_URL}?oauth_token=${oauthToken}`,
      playlistNextUrl: playlistNextUrl(playlist, playlists, oauthToken),
      songs: playlistSongs(playlist, playlists, entities),
    };
  }

  if (search) {
    const playlist = [SEARCH_PLAYLIST_TYPE, search, time].join('|');
    return {
      isFetching: isFetching(playlist, playlists),
      playlist,
      playlistUrl: searchPlaylistUrl(search, time),
      playlistNextUrl: playlistNextUrl(playlist, playlists),
      songs: playlistSongs(playlist, playlists, entities),
    };
  }

  const playlist = [GENRE_PLAYLIST_TYPE, genre, time].join('|');
  return {
    isFetching: isFetching(playlist, playlists),
    playlist,
    playlistUrl: genrePlaylistUrl(genre, time),
    playlistNextUrl: playlistNextUrl(playlist, playlists),
    songs: playlistSongs(playlist, playlists, entities),
  };
};

export default playlistUrl;
