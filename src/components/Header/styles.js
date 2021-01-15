import { AppBar, Fab } from '@material-ui/core';
import styled from 'styled-components';

export const AppBarBottom = styled(AppBar)`
  bottom: 0;
  top: auto;
`;

export const MiddleButton = styled(Fab)`
  position: absolute;
  z-index: 1;
  top: -30px;
  left: 0;
  right: 0;
  margin: 0 auto;
`;
