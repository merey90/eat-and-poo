import styled from 'styled-components';
import { Emoji } from '../components/Emoji';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  & > * {
    margin-bottom: 8px;
  }
`;

export const FormEmoji = styled(Emoji)`
  text-align: center;
  font-size: calc(20px + 18vh);
  text-shadow: 1px 1px 10px #fff, -1px -1px 10px #ccc;
`;
