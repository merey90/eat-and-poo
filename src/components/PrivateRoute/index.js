import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export const PrivateRoute = ({ children, ...rest }) => {
  //   let auth = useAuth();
  return (
    <Route
      {...rest}
      render={({ location }) =>
        false ? (
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
