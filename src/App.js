import React, { useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { auth } from './utils/firebase';
import { Login } from './login';
import { Main } from './main';
import { UserContext } from './utils/authContext';
import { Box } from '@material-ui/core';

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
          <PrivateRoute exact path="/">
            <Main />
          </PrivateRoute>
        </Switch>
      </Box>
      <Header />
    </UserContext.Provider>
  );
};
