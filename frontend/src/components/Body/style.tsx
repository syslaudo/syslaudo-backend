import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledBody = styled.div`
  background: ${colors.componentBackground};

  .container {
    max-width: 85vh;
    min-height: 60vh;
    margin: 3vh auto;
    padding: 3vh;
  }`;

export { StyledBody };
