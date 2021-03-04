import styled from 'styled-components';
import * as colors from '../../style/colors';

export const StyledDesktopNavbar = styled.nav`
  background: ${colors.componentBackground};
  border-bottom: 1px solid ${colors.hover};
  width: 100vw;


  .container {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    max-width: 80rem;
    height: 5rem;
    margin: 0 auto;
  }

  .navlinks,
  .profile {
    display: flex;

    @media screen and (max-width: 1000px) {
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

  .itemTitle {
    display: flex;
    align-items: center;
    white-space: nowrap;
    margin: 2rem 1rem;
  }

  .itemTitleComImagem {
    margin: 1.5rem 1rem;
  }

  .item:hover .itemTitle {
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

export const HamburguerButton = styled.button`
  display: none;
  font-size: 2rem;
  font-weight: bold;
  color: ${colors.primary};
  margin-left: auto;
  padding: 0.5rem;
  background: none;
  border: none;

  @media screen and (max-width: 1000px) {
    display: block;
  }
`;

export const StyledMobileNavbar = styled.nav<{ displayMobile: boolean }>`
  width: 100vw;
  display: ${(props) => (props.displayMobile ? 'flex' : 'none')};
  flex-direction: column;

  .itemTitle,
  .subitem {
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
    align-items: center;
    width: 100vw;
    font-size: 1rem;
    border-bottom: 1px solid ${colors.hover};
    padding: 1vh 0;
    background: ${colors.componentBackground};
  }

  .itemTitle {
    font-weight: bold;
  }

  .itemTitle {
    background: ${colors.primary};
    color: ${colors.background};
  }

  .subitem:hover {
    background: ${colors.hover};
  }

  .fas,
  .far {
    display: none;
  }

  @media screen and (min-width: 1001px) {
    display: none;
  }
`;
