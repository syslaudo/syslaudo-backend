import { StyledTitle } from './style';

export default function Footer(props: any) {
  return (
    <StyledTitle>
      <span>{props.children}</span>
      <hr />
    </StyledTitle>
  );
}
