/* global fetch */
/* global window */
import camelize from 'camelize-ts';
import Soundcloud from 'soundcloud.ts';

export const callApi = (url: string, options: any) =>
  fetch(url, options)
    .then(
      (response) =>
        response.ok ? response.json() : Promise.reject(response.text()),
      (error) => Promise.reject(error)
    )
    .then(
      (json) => ({ json: camelize(json) }),
      (error) => ({ error })
    )
    .catch((error) => ({ error }));

export const loginToSoundCloud = (clientId: any) => {
  // Soundcloud.initialize({
  //   client_id: clientId,
  //   redirect_uri: `${window.location.protocol}//${window.location.host}/api/callback`,
  // });

  const soundcloud = new Soundcloud(
    process.env.SOUNDCLOUD_CLIENT_ID,
    process.env.SOUNDCLOUD_OAUTH_TOKEN
  );

  // return Soundcloud.connect()
  //   .then(
  //     (json: any) => ({ json: camelize(json) }),
  //     (error: any) => ({ error })
  //   )
  //   .catch((error: any) => ({ error }));
};
