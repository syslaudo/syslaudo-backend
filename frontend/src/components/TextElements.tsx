import styled from 'styled-components';
import * as colors from '../style/colors';

export const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.text};

  hr {
    border: 1px solid ${colors.text};
    margin-bottom: 3rem;
  }
`;

export function Title(props: any) {
  return (
    <StyledTitle className={props.className}>
      <span>{props.children}</span>
      <hr />
    </StyledTitle>
  );
}
