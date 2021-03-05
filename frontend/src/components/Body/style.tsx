import styled from 'styled-components';
import * as colors from '../../style/colors';

export const StyledBody = styled.div`
  background: ${colors.componentBackground};

  .container {
    max-width: 80rem;
    margin: 0 auto;
    padding: 3rem;
    min-height: calc(100vh - 30.5rem);

    @media screen and (max-width: 1000px) {
      padding: 3rem 1.5rem;
    }
  }

  img {
    max-width: 80vw;
  }

  .centeredText {
    text-align: center;
  }

  a {
    color: ${colors.primary};
    transition: 200ms;

    :hover {
      color: ${colors.primaryHover};
    }
  }

  .centeredContainer {
    display: flex;
    justify-content: center;
    margin: 0 auto;
  }

  .homeContainer {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap:1rem;

    div {
      margin-left: 1rem;
    }
  }

  .boldText {
    font-weight: bold;
  }

  .bigText {
    font-size: 1.5rem;
  }
`;
