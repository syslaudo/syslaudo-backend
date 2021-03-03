import { StyledNavbar, Item } from './style';
import logo from '../../assets/logo-texto.svg';
import profileSymbol from '../../assets/user-circle-solid.svg';

export default function Navbar() {
  return (
    <StyledNavbar>
      <div>
        <ul>
          <Item>
            <li>
              <div>
                <a href="/">
                  <img src={logo} alt="Logo do syslaudo" />
                </a>
              </div>
            </li>
          </Item>
        </ul>

        <ul>
          <Item>
            <li>
              <span>MÉDICOS</span>
              <ul>
                <a href="/">Cadastrar</a>
                <a href="/">Listar</a>
              </ul>
            </li>
          </Item>

          <Item>
            <li>
              <span>PACIENTES</span>
              <ul>
                <a href="/">Cadastrar</a>
                <a href="/">Listar</a>
              </ul>
            </li>
          </Item>

          <Item>
            <li>
              <span>EXAMES</span>
              <ul>
                <a href="/">Cadastrar</a>
                <a href="/">Listar</a>
              </ul>
            </li>
          </Item>
        </ul>

        <ul>
          <Item>
            <li>
              <div>
                <span>Fulano de Tal</span>
                <img src={profileSymbol} alt="User Symbol" />
              </div>
              <ul>
                <a href="/">Seu Perfil</a>
                <a href="/">Configurações</a>
                <a href="/">Sair</a>
              </ul>
            </li>
          </Item>
        </ul>

        <button type="button" />
      </div>
    </StyledNavbar>
  );
}
