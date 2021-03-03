import styled from 'styled-components';
import * as colors from '../../style/colors';

export const StyledFooter = styled.div`
  background: ${colors.darkBackground};
  color: ${colors.lightText};
  max-width: 100vw;

  .container {
    max-width: 100vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    min-height: 3rem;

    > p {
      margin: 0 auto 1rem auto;
    }

    table {
      margin: 2rem auto;
      min-width: 30vw;
    }

    th {
      font-weight: bold;
      text-transform: uppercase;
    }

    th:first-child {
      text-align: left;
    }

    tr > td:last-child {
      text-align: center;
    }

    th {
      padding: 0 2rem 1rem 2rem;
    }

    td {
      padding: 0.3rem 2rem;
    }

    a {
    transition: 200ms;

    :hover {
      color: ${colors.primaryHover};
    }
  }
  }
`;
