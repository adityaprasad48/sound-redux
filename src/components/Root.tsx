import React from 'react';

import Router from './Router';

interface Props {
  initAuth: any;
  initEnvironment: any;
  initRouter: any;
  paths: string[];
  router: any;
  routes: any;
}

const Root = ({
  initAuth,
  initEnvironment,
  initRouter,
  paths,
  router,
  routes,
}: Props) => {
  // componentWillMount() {
  //   const { initAuth, initEnvironment, initRouter, paths } = this.props;
  //   initAuth();
  //   initEnvironment();
  //   initRouter(paths);
  // }

  console.log('Root');

  return (
    <div>
      {/* <NavContainer /> */}
      <Router router={router} routes={routes} />
      {/* <PlayerContainer />
      <HistoryContainer /> */}
    </div>
  );
};

export default Root;
