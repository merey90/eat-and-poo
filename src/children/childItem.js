import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';

export const ChildItem = ({ childData }) => {
  return (
    <ListItem>
      <ListItemAvatar>
        <Avatar>
          <FaceIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={childData.name} secondary="Jan 9, 2014" />
    </ListItem>
  );
};
