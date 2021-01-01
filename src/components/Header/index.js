import React from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { AppBar, IconButton, Toolbar, Typography } from '@material-ui/core';

export const Header = () => (
  <AppBar position="static">
    <Toolbar>
      <IconButton edge="start" color="inherit" aria-label="menu">
        <MenuIcon />
      </IconButton>
      <Typography variant="h6">EAT & POO</Typography>
    </Toolbar>
  </AppBar>
);
