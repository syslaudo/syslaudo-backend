import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.componentBackground};
  max-width: 82.5rem;
  margin: 1.5rem auto;
  box-shadow: 0 0 20px ${colors.shadow};
  border-radius: 20px;

  ul {
    display: flex;
    justify-content: space-between;
  }

  >ul:first-of-type img {
    height: 50px;
    margin: 1rem;
  }

  >ul:last-of-type img {
    height: 50px;
    margin-left: 1rem;
  }

  span {
    color: ${colors.text};
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    margin: 1rem 0.5rem;
    vertical-align: text-bottom;
  }

  button {
    display: none;
  }
`;

const Dropdown = styled.nav`
  position: relative;
  display: inline-block;
  cursor: context-menu;

  >li {
    position: relative;
    display: flex;
    flex: 1;
    margin: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.text};
    background: ${colors.background};
    border-radius: 20px;
    transition: 200ms;
  }

  >li>ul {
    display: none;
    position: absolute;
    top: 4rem;
    background-color: ${colors.componentBackground};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px ${colors.shadow};
    z-index: 1;
    border-radius: 20px;
  }

  >li>ul>a {
    position: relative;
    display: flex;
    flex: 1;
    margin: 1rem;
    padding: 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.text};
    background: ${colors.background};
    border-radius: 20px;
    text-decoration: none;
  }

  >li>ul>a:hover {
    background-color: ${colors.hover};
  }

  :hover li>ul {
    display: block;
  }

  :hover >li {
    background-color: ${colors.hover};
  }
`;

export { StyledNavbar, Dropdown };
