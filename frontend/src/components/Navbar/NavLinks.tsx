import { Link } from "react-router-dom";

const NavLinks = () => {
  return (
    <ul className="navlinks">
      <li className="item">
        <span className="submenuTitle">MÉDICOS</span>
        <ul className="submenu">
          <Link className="subitem" to="/cadrastrar-medico">
            Cadastrar
          </Link>
          <Link className="subitem" to="/listar-medicos">
            Listar
          </Link>
        </ul>
      </li>

      <li className="item">
        <span className="submenuTitle">PACIENTES</span>
        <ul className="submenu">
          <Link className="subitem" to="/cadastrar-paciente">
            Cadastrar
          </Link>
          <Link className="subitem" to="/listar-pacientes">
            Listar
          </Link>
        </ul>
      </li>

      <li className="item">
        <span className="submenuTitle">EXAMES</span>
        <ul className="submenu">
          <Link className="subitem" to="/solicitar-exame">
            Solicitar
          </Link>
          <Link className="subitem" to="/listar-exame">
            Listar
          </Link>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
