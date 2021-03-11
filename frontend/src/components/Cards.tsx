import styled from 'styled-components';
import * as colors from '../style/colors';

export const Card = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 2rem;
  border: 1px solid ${colors.hover};
  border-left: 5px solid ${colors.primary};
  background: ${colors.background};
  border-radius: 10px;
  box-shadow: 0 0 20px ${colors.shadow};
  min-height: 3rem;
  padding: 2rem;

  h1 {
    font-size: 1.5rem;
    font-weight: bold;
    color: ${colors.text};
  }
`;

export const CardGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 1rem;
`;
