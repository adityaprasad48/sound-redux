import React from 'react';

interface Props {
  router: any;
  routes: any;
}

const Router = ({ router, routes }: Props) => {
  const { path } = router.route;
  if (path in routes) {
    const Component = routes[path];
    return <Component />;
  }

  return null;
};

export default Router;
