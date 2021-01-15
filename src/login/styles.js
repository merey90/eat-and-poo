import { SvgIcon } from '@material-ui/core';
import styled from 'styled-components';

import { ReactComponent as GoogleSvg } from './google.svg';

const Google = (props) => (
  <SvgIcon {...props} component={GoogleSvg} viewBox="0 0 600 500" />
);

export const GoogleIcon = styled(Google)`
  margin-left: 8px;
`;
