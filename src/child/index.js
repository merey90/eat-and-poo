import React, { useContext } from 'react';
import { Box, LinearProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';

import { ChildContext } from '../utils/childContext';
import { DashboardButton, EatButton, PooButton } from './styles';
import { Emoji } from '../components/Emoji';

export const Child = () => {
  const { child } = useContext(ChildContext);

  if (!child) return <LinearProgress />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      flex={1}
    >
      <EatButton
        size="large"
        variant="contained"
        component={Link}
        to="/event/eat"
      >
        <Emoji emoji="eat" />
      </EatButton>
      <PooButton
        size="large"
        variant="contained"
        component={Link}
        to="/event/poo"
      >
        <Emoji emoji="poo" />
      </PooButton>
      <DashboardButton
        size="large"
        variant="contained"
        component={Link}
        to="/dashboard"
      >
        <Emoji emoji="dashboard" />
      </DashboardButton>
    </Box>
  );
};
