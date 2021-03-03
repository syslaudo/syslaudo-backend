import { StyledTitle } from './style';

export function Title(props: any) {
  return (
    <StyledTitle className={props.className}>
      <span>{props.children}</span>
      <hr />
    </StyledTitle>
  );
}
 