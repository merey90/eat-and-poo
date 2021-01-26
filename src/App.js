import React, { useEffect, useState } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { Box } from '@material-ui/core';

import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { auth } from './utils/firebase';
import { Login } from './login';
import { UserContext } from './utils/authContext';
import { NewChild } from './newChild';
import { Child } from './child';
import { ChildContext } from './utils/childContext';
import { NewEvent } from './newEvent';
import { Dashboard } from './dashboard';

export const App = () => {
  const [user, setUser] = useState(null);
  const [child, setChild] = useState(null);

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
      <ChildContext.Provider value={{ child, setChild }}>
        <Box display="flex" flexGrow={1} flexDirection="column" p={2}>
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <PrivateRoute exact path="/new">
              <NewChild />
            </PrivateRoute>
            <PrivateRoute exact path="/child">
              <Child />
            </PrivateRoute>
            <PrivateRoute exact path="/event/:eventType">
              <NewEvent />
            </PrivateRoute>
            <PrivateRoute exact path="/dashboard">
              <Dashboard />
            </PrivateRoute>
            <Redirect to="/child" />
          </Switch>
        </Box>
        <Header />
      </ChildContext.Provider>
    </UserContext.Provider>
  );
};
