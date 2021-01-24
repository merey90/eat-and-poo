import React from 'react';
import {
  Avatar,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from '@material-ui/core';
import FaceIcon from '@material-ui/icons/Face';
import { Link } from 'react-router-dom';

export const ChildItem = ({ childData }) => {
  return (
    <ListItem component={Link} to={`/children/${childData.id}`}>
      <ListItemAvatar>
        <Avatar>
          <FaceIcon />
        </Avatar>
      </ListItemAvatar>
      <ListItemText primary={childData.name} secondary={childData.birthday} />
    </ListItem>
  );
};
