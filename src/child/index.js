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
        <span className="emoji" role="img" aria-label="baby bottle">
          🍼
        </span>
      </EatButton>
      <PooButton size="large" variant="contained">
        <span className="emoji" role="img" aria-label="pile of poo">
          💩
        </span>
      </PooButton>
      <HistoryButton size="large" variant="contained">
        <span className="emoji" role="img" aria-label="spiral calendar">
          📅
        </span>
      </HistoryButton>
    </Box>
  );
};
