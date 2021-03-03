import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledTitle = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  text-transform: uppercase;
  color: ${colors.text};

  hr {
    border: 1px solid ${colors.text};
  }
`;

export { StyledTitle };
