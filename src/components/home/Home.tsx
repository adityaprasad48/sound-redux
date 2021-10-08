/* eslint-disable react-hooks/exhaustive-deps */
import Heart from 'components/heart/Heart';
import { useEffect } from 'react';
import Soundcloud from 'soundcloud.ts';
import Tools from './Tools';

const Home = () => {
  console.log('Home Page');

  // function fetchApi() {
  //   /* Credentials are optional, client id is manually found if omitted. */
  //   const soundcloud = new Soundcloud(
  //     // client Id
  //     'RCKzxQA0jl0HV4RjjQRrblyTQzvsfgsc',
  //     // auth token
  //     '2-290059-956095003-ncjIPedpmVb59o'
  //   );

  //   /* You can get tracks by URL or ID (which can only be gotten from the API) */
  //   const track = await soundcloud.tracks.get(
  //     'https://soundcloud.com/imtenpi/snowflake'
  //   );

  //   console.log('track', track);
  // }

  useEffect(() => {
    const soundcloud = new Soundcloud(
      // client Id
      'RCKzxQA0jl0HV4RjjQRrblyTQzvsfgsc',
      // auth token
      '2-290059-956095003-ncjIPedpmVb59o'
    );

    /* You can get tracks by URL or ID (which can only be gotten from the API) */
    const track = soundcloud.tracks.get(
      'https://soundcloud.com/imtenpi/snowflake'
    );

    console.log('track', track);
  }, []);

  return (
    <div className="home">
      <Tools />
      <Heart
        id={2}
        isAuthenticated
        liked
        favoritingsCount={2}
        login={() => {
          console.log('hi');
        }}
        toggleLike
      />
    </div>
  );
};

export default Home;
