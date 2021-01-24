import React, { useContext } from 'react';
import { Box, LinearProgress } from '@material-ui/core';

import { ChildContext } from '../utils/childContext';
import { EatButton, HistoryButton, PooButton } from './styles';

export const Child = () => {
  const { child } = useContext(ChildContext);

  const payload = {
    server_timestamp: {
      '.sv': 'timestamp',
    },
  };

  if (!child) return <LinearProgress />;

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="flex-end"
      flex={1}
    >
      <EatButton size="large" variant="contained">
        EAT
      </EatButton>
      <PooButton size="large" variant="contained">
        POO
      </PooButton>
      <HistoryButton size="large" variant="contained">
        HISTORY
      </HistoryButton>
    </Box>
  );
};
