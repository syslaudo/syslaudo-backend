import styled from 'styled-components';
import * as colors from '../../style/colors';

export const StyledForm = styled.div`
  display: block;
  width: 80%;
  margin: 2rem auto;
`;

export const StyledInputGroup = styled.div`
  display: block;
  width: 100%;
  margin: 2rem auto;
`;

export const StyledLabel = styled.label`
  font-weight: bold;
  margin-bottom: 0.5em;
  display: block;
`;

export const StyledInput = styled.input`
  padding: 0.6rem;
  font-family: 'Montserrat';
  font-size: 1rem;
  border: 1px solid ${colors.text};
  background: ${colors.componentBackground};
  border-radius: 5px;
  width: 100%;
  margin-bottom: 0.5em;
`;

export const StyledMessage = styled.label`
  margin-bottom: 0.5em;
  display: block;
`;

export const StyledButtonGroup = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const StyledButton = styled.button<{ primary: boolean }>`
  padding: 0.5rem 1.5rem;
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 0;
  border-radius: 5px;
  color: ${colors.componentBackground};
  color: ${(props) =>
    props.primary ? colors.componentBackground : colors.text};
  background: ${(props) =>
    props.primary ? colors.primary : colors.componentBackground};
  border-width: ${(props) => (props.primary ? 'none' : '1px')};
  border-style: ${(props) => (props.primary ? 'none' : 'solid')};
  border-color: ${(props) => (props.primary ? 'none' : colors.text)};

  font-size: 1.25rem;
  font-weight: 600;
  text-transform: uppercase;

  transition: 0.2s;

  :hover {
    background: ${(props) =>
      props.primary ? colors.primaryHover : colors.primary};
    color: ${(props) =>
      props.primary ? colors.componentBackground : colors.componentBackground};
    border-color: ${(props) => (props.primary ? 'none' : colors.primary)};
  }
`;
