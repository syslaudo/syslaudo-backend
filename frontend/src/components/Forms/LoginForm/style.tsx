import styled from 'styled-components';
import * as colors from '../../../style/colors';
import { Form } from '../FormElements';

export const LoginFormContainer = styled(Form)`
  margin-top: 5vh;
  width: 30%;
  background: ${colors.background};
  border: 1px solid ${colors.hover};
  border-left: 5px solid ${colors.primary};
  padding: 3rem 5rem;
  border-radius: 10px;
  box-shadow: 0 0 20px ${colors.shadow};

  > div {
    margin-top: 5vh;
  }

  h5 {
    font-size: 1.5rem;
    font-weight: bold;
    text-align: center;
    color: ${colors.primary};
  }

  p {
    position: relative;
    font-size: 0.9rem;
    text-align: right;
    top: -1rem;
  }

  @media screen and (max-width: 1000px) {
    width: calc(100%);
    padding: 1rem 0;
    border: none;
    box-shadow: none;
  }
`;
