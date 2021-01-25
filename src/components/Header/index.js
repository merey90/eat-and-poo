import React, { useContext, useState } from 'react';
import MenuIcon from '@material-ui/icons/Menu';
import { Drawer } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { AppBarBottom, BarButton, MiddleButton, SToolbar } from './styles';
import { Menu as CustomMenu } from './menu';
import { ChildrenMenu } from './childrenMenu';
import { auth } from '../../utils/firebase';
import { UserContext } from '../../utils/authContext';

export const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { user } = useContext(UserContext);

  const toggleDrawer = (toggle) => {
    setIsMenuOpen(toggle);
  };

  return (
    <>
      <AppBarBottom position="static">
        <SToolbar variant="dense">
          <MiddleButton
            color="secondary"
            aria-label="menu"
            onClick={() => toggleDrawer(true)}
          >
            <MenuIcon />
          </MiddleButton>
          <BarButton component={Link} to="/">
            EAT & POO
          </BarButton>
          {!!auth.currentUser && !!user && <ChildrenMenu />}
        </SToolbar>
      </AppBarBottom>
      <Drawer
        anchor={'bottom'}
        open={isMenuOpen}
        onClose={() => toggleDrawer(false)}
      >
        <CustomMenu id="drawerMenu" toggleDrawer={toggleDrawer} />
      </Drawer>
    </>
  );
};
