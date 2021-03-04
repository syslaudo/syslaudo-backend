import styled from 'styled-components';
import * as colors from '../style/colors';

export const Form = styled.div`
  display: block;
  width: 80%;
  margin: 2rem auto;
`;

export const InputGroup = styled.div`
  display: block;
  width: 100%;
  margin: 2rem auto;
`;

export const Label = styled.label`
  margin-bottom: 0.5em;
  display: block;
`;

export const Message = styled.label`
  margin-bottom: 0.5em;
  display: block;
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Button = styled.button<{ primary?: boolean }>`
  padding: 0.5rem 1.5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${(props) =>
    props.primary ? colors.componentBackground : colors.text};
  background: ${(props) =>
    props.primary ? colors.primary : colors.componentBackground};
  transition: 0.1s;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.primary ? colors.primary : colors.text)};
  font-size: 1rem;
  text-transform: uppercase;

  :hover {
    background: ${colors.primaryHover};
    color: ${colors.componentBackground};
    border-color: ${colors.primaryHover};
  }
`;

export const Input = styled.input`
  padding: 0.6rem;
  font-family: 'Montserrat';
  font-size: 1rem;
  border: 1px solid ${colors.text};
  background: ${colors.componentBackground};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;

  :disabled {
    background: ${colors.hover};
  }

  :focus {
    outline: none;
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryShadow};
  }
`;
