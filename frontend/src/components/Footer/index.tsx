import { StyledFooter } from './style';

export default function Footer(props: any) {
  return (
    <StyledFooter>
      <div className="container">{props.children}</div>
    </StyledFooter>
  );
}
