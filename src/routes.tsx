import React, { Suspense  } from 'react';
import { Route, Switch } from 'react-router-dom';
import pageURL from './constants/pageURL';

import Home from './pages/Home';


const Routes = () => {
  const routeMap = [
    {
      path: pageURL.home,
      component: Home,
      exact: true,
      dynamic: false,
    },
    {
      path: '*',
      component: Home,
      exact: true,
      dynamic: false,
    },
  ];
  return (
    <Suspense >
      <Switch>
        {routeMap.map((item, index) => (
          <Route key={index} path={item.path} exact={item.exact} component={item.component} />
        ))}
      </Switch>
    </Suspense>
  );
};

export default Routes;
