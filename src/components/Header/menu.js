import React, { useContext } from 'react';

import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import {
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@material-ui/core';
import { auth } from '../../utils/firebase';
import { UserContext } from '../../utils/authContext';
import { ChildContext } from '../../utils/childContext';

export const Menu = ({ toggleDrawer }) => {
  const { removeUser } = useContext(UserContext);
  const { setChild } = useContext(ChildContext);

  const handleLogOut = () => {
    auth.signOut();
    setChild(null);
    removeUser();
  };

  return (
    <div
      role="presentation"
      onClick={() => toggleDrawer(false)}
      onKeyDown={() => toggleDrawer(false)}
    >
      <List>
        <ListItem button onClick={handleLogOut}>
          <ListItemIcon>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <Divider />
    </div>
  );
};
