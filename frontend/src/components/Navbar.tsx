import styled from 'styled-components';
import logo from '../assets/logo-texto.svg';
import profileSymbol from '../assets/user-circle-solid.svg';
import * as colors from '../style/colors';

const StyledNavbar = styled.nav`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: ${colors.componentBackground};
  width: 95%;
  margin: 1.5rem auto;
  box-shadow: 0 0 20px ${colors.shadow};
  border-radius: 20px;

  .menu {
    display: flex;
    justify-content: space-between;
  }

  .menu img,
  .user img {
    height: 50px;
    margin: 1rem;
  }

  .dropdown {
    position: relative;
    display: inline-block;
    cursor: context-menu;
  }

  .item {
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

  .subitem {
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
  }

  .submenu {
    display: none;
    position: absolute;
    top: 4rem;
    background-color: ${colors.componentBackground};
    min-width: 160px;
    box-shadow: 0px 8px 16px 0px ${colors.shadow};
    z-index: 1;
    border-radius: 20px;
  }

  .subitem {
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
  }

  .subitem:hover {
    background-color: ${colors.hover};
  }

  .dropdown:hover .submenu {
    display: block;
  }

  .dropdown:hover .item {
    background-color: ${colors.hover};
  }

  .profile {
    display: flex;
    flex: 1;
    margin: 1rem;
    padding: 0 1rem;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
    font-weight: 600;
    color: ${colors.text};
    background: ${colors.background};
    border-radius: 20px;
  }

  .username {
    color: ${colors.text};
    text-align: center;
    text-decoration: none;
    font-size: 1rem;
    margin: 1rem 0.5rem;
    vertical-align: text-bottom;
  }
`;

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul className="menu">
        <li>
          <a href="/">
            <img src={logo} alt="Logo do syslaudos" />
          </a>
        </li>

        <div className="dropdown">
          <li className="item">
            MÉDICOS
            <ul className="submenu">
              <a className="subitem" href="/">
                Cadastrar
              </a>
              <a className="subitem" href="/">
                Listar
              </a>
            </ul>
          </li>
        </div>

        <div className="dropdown">
          <li className="item">
            PACIENTES
            <ul className="submenu">
              <a className="subitem" href="/">
                Cadastrar
              </a>
              <a className="subitem" href="/">
                Listar
              </a>
            </ul>
          </li>
        </div>

        <div className="dropdown">
          <li className="item">
            EXAMES
            <ul className="submenu">
              <a className="subitem" href="/">
                Cadastrar
              </a>
              <a className="subitem" href="/">
                Listar
              </a>
            </ul>
          </li>
        </div>
      </ul>

      <div className="user">
        <div className="dropdown">
          <div className="profile item">
            <span className="username">Fulano de Tal</span>
            <img src={profileSymbol} alt="User Symbol" />
            <ul className="submenu">
              <a className="subitem" href="/">
                Seu Perfil
              </a>
              <a className="subitem" href="/">
                Configurações
              </a>
              <a className="subitem" href="/">
                Sair
              </a>
            </ul>
          </div>
        </div>
      </div>
    </StyledNavbar>
  );
}
