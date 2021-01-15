import React, { useState } from 'react';

import MenuIcon from '@material-ui/icons/Menu';
import { Drawer, Toolbar, Typography } from '@material-ui/core';
import { AppBarBottom, MiddleButton } from './styles';
import { Menu } from './menu';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDrawer = (toggle) => {
    setIsMenuOpen(toggle);
  };

  return (
    <>
      <AppBarBottom position="static">
        <Toolbar variant="dense">
          <MiddleButton
            color="secondary"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </MiddleButton>
          <Typography variant="h6">EAT & POO</Typography>
        </Toolbar>
      </AppBarBottom>
      <Drawer
        anchor={'bottom'}
        open={isMenuOpen}
        onClose={() => toggleDrawer(false)}
      >
        <Menu toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
