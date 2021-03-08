import styled from 'styled-components';
import * as colors from '../../style/colors';

export const Form = styled.div`
  display: block;
  width: 100%;
  margin: auto;
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
  color: ${(props) => (props.primary ? colors.background : colors.text)};
  background: ${(props) =>
    props.primary ? colors.primary : colors.background};
  transition: 0.1s;
  border-radius: 5px;
  border-width: 1px;
  border-style: solid;
  border-color: ${(props) => (props.primary ? colors.primary : colors.text)};
  font-size: 1rem;
  text-transform: uppercase;

  :hover {
    background: ${colors.primaryHover};
    color: ${colors.background};
    border-color: ${colors.primaryHover};
  }

  :focus {
    outline: none;
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryShadow};
  }
`;

export const Input = styled.input`
  padding: 0.6rem;
  color: ${colors.text};
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  border: 1px solid ${colors.text};
  background: ${colors.background};
  border-radius: 5px;
  width: calc(100% - 1.2rem);
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

export const RadioGroup = styled.div`
  display: flex;
  justify-content: flex-start;

  @media screen and (max-width: 1000px) {
    flex-direction: column;
    width: 100%;
    margin: 0;
  }
`;

const Radio = styled.label`
  display: flex;
  margin-right: 2rem;
  padding: 0.6rem 0;
  border-radius: 5px;

  input {
    display: none;
  }

  span {
    border: 1px solid ${colors.text};
    padding: 0.6rem;
    border-radius: 5px;
    white-space: nowrap;
  }

  input:checked + span {
    color: ${colors.primary};
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryShadow};
  }

  @media screen and (max-width: 1000px) {
    width: 100%;

    span {
      width: calc(100% - 1.2rem);
      text-align: center;
    }
  }
`;

export function RadioButton(props: any) {
  return (
    <Radio>
      <input
        type="radio"
        name={props.name}
        id={props.id}
        value={props.value}
        checked={props.checked}
        onChange={props.onChange}
      />
      <span>{props.id}</span>
    </Radio>
  );
}

export const MultilineInput = styled.textarea`
  padding: 0.6rem;
  color: ${colors.text};
  font-family: 'Open Sans', sans-serif;
  font-size: 1rem;
  border: 1px solid ${colors.text};
  background: ${colors.background};
  border-radius: 5px;
  width: calc(100% - 1.2rem);
  margin-bottom: 0.5em;
  height: 10rem;

  :disabled {
    background: ${colors.hover};
  }

  :focus {
    outline: none;
    border: 1px solid ${colors.primary};
    box-shadow: 0 0 0 2px ${colors.primaryShadow};
  }
`;
