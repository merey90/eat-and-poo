import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { auth } from './utils/firebase';
import { Login } from './login';
import { UserContext } from './utils/authContext';
import { Children } from './children';
import { NewChild } from './newChild';
import { Child } from './child';

export const App = () => {
  const [user, setUser] = useState(null);

  const removeUser = () => setUser(null);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={{ user, removeUser }}>
      <Box display="flex" flexGrow={1} flexDirection="column" p={2}>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <PrivateRoute exact path="/children">
            <Children />
          </PrivateRoute>
          <PrivateRoute exact path="/new">
            <NewChild />
          </PrivateRoute>
          <PrivateRoute exact path="/children/:childId">
            <Child />
          </PrivateRoute>
          <Redirect to="/children" />
        </Switch>
      </Box>
      <Header />
    </UserContext.Provider>
  );
};
