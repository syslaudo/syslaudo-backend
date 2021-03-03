import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledBody = styled.div`
  background: ${colors.componentBackground};

  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 3rem;
    min-height: calc(100vh - 31.1rem);
  }
`;

export { StyledBody };
