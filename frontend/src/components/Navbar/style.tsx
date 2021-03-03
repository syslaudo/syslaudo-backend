import styled from 'styled-components';
import * as colors from '../../style/colors';

const StyledNavbar = styled.div``;

const StyledDesktopNavbar = styled.nav`
  background: ${colors.componentBackground};
  border-bottom: 1px solid ${colors.hover};

  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 85vh;
    height: 4rem;
    margin: 0 auto;
  }

  .navlinks,
  .profile {
    display: flex;

    @media screen and (max-width: 768px) {
      display: none;
    }
  }

  .profile {
    margin-left: auto;
  }

  .item {
    cursor: context-menu;
    position: relative;
    display: block;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    padding: 0 0.5rem;
    color: ${colors.text};
    background: ${colors.componentBackground};
    transition: 200ms;
    background: transparent;
  }

  .submenuTitle {
    display: flex;
    align-items: center;
  }

  .submenu {
    display: none;
    position: absolute;
    background-color: ${colors.background};
    border: 1px solid ${colors.hover};
    padding: 0.5rem;
  }

  .subitem {
    position: relative;
    display: flex;
    padding: 0.6rem 1rem;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    color: ${colors.text};
    background: ${colors.background};
    text-decoration: none;
    transition: 200ms;
  }

  .subitem:hover {
    background-color: ${colors.primary};
    color: ${colors.background};
  }

  .item:hover .submenu {
    display: block;
  }

  .submenuTitle {
    color: ${colors.text};
    font-size: 1rem;
    margin: 1.5rem 1rem;
  }

  .item:hover .submenuTitle {
    font-weight: bold;
    color: ${colors.primary};
  }

  .logo {
    height: 3rem;
    margin: 0.9rem 0.5rem;
  }

  .fa-user-circle {
    font-size: 2rem;
    color: ${colors.primary};
  }
`;

const HamburguerButton = styled.button`
  display: none;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: auto;
  padding: 0.5rem;
  background: none;
  border: none;

  :focus {
    outline: 0;
  }

  @media screen and (max-width: 768px) {
    display: block;
  }
`;

const StyledMobileNavbar = styled.nav<{ displayMobile: boolean }>`
  width: 100%;
  display: ${(props) => (props.displayMobile ? 'flex' : 'none')};
  flex-direction: column;

  .submenuTitle,
  .subitem {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    width: 100%;
    font-size: 1.5vh;
    font-weight: bold;
    border-bottom: 1px solid ${colors.hover};
    padding: 1vh;
  }

  .submenuTitle {
    background: ${colors.primary};
    color: ${colors.background};
  }

  .subitem:hover {
    background: ${colors.hover};
  }

  .fa-user-circle {
    display: none;
  }

  @media screen and (min-width: 769px) {
    display: none;
  }
`;

export {
  StyledNavbar,
  StyledDesktopNavbar,
  HamburguerButton,
  StyledMobileNavbar,
};
