import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledNavbar = styled.nav`
  background: ${colors.componentBackground};
  border-bottom: 1px solid ${colors.hover};

  > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    max-width: 82.5rem;
    height: 4rem;
  }

  > div > ul {
    display: flex;
  }

  > div > ul:last-of-type {
    margin-left: auto;
  }

  button {
    display: none;
  }
`;

const Item = styled.nav`
  cursor: context-menu;

  > li {
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: ${colors.text};
    background: ${colors.background};
    transition: 200ms;
  }

  > li > div,
  > li > span {
    display: flex;
    align-items: center;
  }

  > li > ul {
    display: none;
    position: absolute;
    background-color: ${colors.componentBackground};
    border-top: 1px solid ${colors.hover};
    border-left: 1px solid ${colors.hover};
    border-right: 1px solid ${colors.hover};
  }

  > li > ul > a {
    position: relative;
    display: flex;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${colors.text};
    background: ${colors.background};
    text-decoration: none;
    border-bottom: 1px solid ${colors.hover};
    transition: 200ms;
  }

  > li > ul > a:hover {
    background-color: ${colors.hover};
  }

  :hover li > ul {
    display: block;
  }

  span {
    color: ${colors.text};
    font-size: 1rem;
    margin: 1.5rem 1rem;
  }

  img {
    height: 2rem;
    margin: 0.9rem 0.5rem;
  }
`;

export { StyledNavbar, Item };
