import { StyledBody } from './style';

export default function Body(props: any) {
  return (
    <StyledBody className={props.className}>
      <div className="container">{props.children}</div>
    </StyledBody>
  );
}
