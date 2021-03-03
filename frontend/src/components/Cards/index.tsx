import { StyledCard, StyledCardGroup } from './style';

export function Card(props: any) {
  return <StyledCard className={props.className}>{props.children}</StyledCard>;
}

export function CardGroup(props: any) {
  return (
    <StyledCardGroup className={props.className}>
      {props.children}
    </StyledCardGroup>
  );
}
