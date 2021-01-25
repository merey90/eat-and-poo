import { AppBar, Button, Fab, Toolbar } from '@material-ui/core';
import styled from 'styled-components';
import { withStyles } from '@material-ui/core/styles';

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

export const SToolbar = styled(Toolbar)`
  justify-content: space-between;
`;

export const BarButton = styled(Button)`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  font-size: 20px;
`;

export const ChildButton = withStyles((theme) => ({
  root: {
    flexBasis: '40%',
    minWidth: 0,
  },
  label: {
    textTransform: 'uppercase',
    fontWeight: 700,
    color: theme.palette.secondary.main,
    whiteSpace: 'nowrap',
    textOverflow: 'ellipsis',
    overflow: 'hidden',
    fontSize: 'calc(15px + 1vw)',
    justifyContent: 'flex-start',
  },
}))(Button);
