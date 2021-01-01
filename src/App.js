import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import { Header } from './components/Header';
import { PrivateRoute } from './components/PrivateRoute';
import { Login } from './login';
import { Main } from './main';

export const App = () => {
  return (
    <>
      <Header />
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <PrivateRoute exact path="/">
          <Main />
        </PrivateRoute>
        <Redirect to="/login" />
      </Switch>
    </>
  );
};
