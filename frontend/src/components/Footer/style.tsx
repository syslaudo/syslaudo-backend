import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledFooter = styled.div`
  background: ${colors.darkBackground};
  color: ${colors.lightText};

  .container {
    max-width: 65vw;
    height: 25vh;
    margin: 0 auto;
    padding: 3vh;
  }`;

export { StyledFooter };
