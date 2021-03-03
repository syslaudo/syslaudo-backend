import { StyledBody } from './style';

export default function Body(props: any) {
  return (
    <StyledBody>
      <div className="container">{props.children}</div>
    </StyledBody>
  );
}
