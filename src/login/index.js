import React, { useContext, useEffect } from 'react';
import { Box, Button, Paper } from '@material-ui/core';
import { GoogleIcon } from './styles';
import { auth, authProvider } from '../utils/firebase';
import { useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../utils/authContext';

export const Login = () => {
  const history = useHistory();
  const location = useLocation();
  const { user } = useContext(UserContext);

  const { from } = location.state || { from: { pathname: '/' } };

  useEffect(() => {
    if (!!user) {
      history.replace(from);
    }
  }, [history, from, user]);

  const signInWithGoogle = () => {
    auth.signInWithPopup(authProvider);
    history.replace(from);
  };

  return (
    <Box
      componen={Paper}
      padding={2}
      display="flex"
      justifyContent="center"
      alignItems="center"
      flexGrow={1}
    >
      <Button variant="contained" color="primary" onClick={signInWithGoogle}>
        SIGN IN WITH <GoogleIcon />
      </Button>
    </Box>
  );
};
