import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';

import { UserContext } from '../../utils/authContext';

export const PrivateRoute = ({ children, ...rest }) => {
  const { user } = useContext(UserContext);

  return (
    <Route
      {...rest}
      render={({ location }) =>
        !!user ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: '/login',
              state: { from: location },
            }}
          />
        )
      }
    />
  );
};
