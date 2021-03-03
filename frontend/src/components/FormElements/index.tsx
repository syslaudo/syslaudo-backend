import {
  StyledButton,
  StyledButtonGroup,
  StyledForm,
  StyledInput,
  StyledInputGroup,
  StyledLabel,
  StyledMessage,
} from './style';

export function Form(props: any) {
  return <StyledForm className={props.className}>{props.children}</StyledForm>;
}

export function ButtonGroup(props: any) {
  return (
    <StyledButtonGroup className={props.className}>
      {props.children}
    </StyledButtonGroup>
  );
}

export function Button(props: any) {
  return (
    <StyledButton
      primary={props.primary}
      onMouseDown={(e) => e.preventDefault()}
      className={props.className}
    >
      {props.children}
    </StyledButton>
  );
}

export function InputGroup(props: any) {
  return (
    <StyledInputGroup className={props.className}>
      {props.children}
    </StyledInputGroup>
  );
}

export function Input(props: any) {
  return (
    <StyledInput className={props.className}>{props.children}</StyledInput>
  );
}

export function Label(props: any) {
  return (
    <StyledLabel className={props.className}>{props.children}</StyledLabel>
  );
}

export function ValidationMessage(props: any) {
  return (
    <StyledMessage className={props.className}>{props.children}</StyledMessage>
  );
}
