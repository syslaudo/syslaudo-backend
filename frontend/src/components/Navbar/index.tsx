import {StyledNavbar, Dropdown} from './style'
import logo from '../../assets/logo-texto.svg';
import profileSymbol from '../../assets/user-circle-solid.svg';

export default function Navbar() {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="/">
            <img src={logo} alt="Logo do syslaudo" />
          </a>
        </li>

        <Dropdown>
          <li>
            MÉDICOS
            <ul>
              <a href="/">
                Cadastrar
              </a>
              <a href="/">
                Listar
              </a>
            </ul>
          </li>
        </Dropdown>

        <Dropdown>
          <li>
            PACIENTES
            <ul>
              <a href="/">
                Cadastrar
              </a>
              <a href="/">
                Listar
              </a>
            </ul>
          </li>
        </Dropdown>

        <Dropdown>
          <li>
            EXAMES
            <ul>
              <a href="/">
                Cadastrar
              </a>
              <a href="/">
                Listar
              </a>
            </ul>
          </li>
        </Dropdown>
      </ul>

      <ul>
        <Dropdown>
          <li>
            <span>Fulano de Tal</span>
            <img src={profileSymbol} alt="User Symbol" />
            <ul>
              <a href="/">
                Seu Perfil
              </a>
              <a href="/">
                Configurações
              </a>
              <a href="/">
                Sair
              </a>
            </ul>
          </li>
        </Dropdown>
      </ul>

      <button type="button">
        Iniciar um ciclo
      </button>
    </StyledNavbar>
  );
}
