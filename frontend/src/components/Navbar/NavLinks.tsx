import { Link } from 'react-router-dom';

const NavLinks = () => {
  return (
    <ul className="navlinks">
      <li className="item">
        <Link className="itemSingle" to="/inicio">
          INÍCIO
        </Link>
      </li>

      <li className="item">
        <span className="itemTitle">
          MÉDICOS &nbsp;<i className="fas fa-caret-down"></i>
        </span>
        <ul className="submenu">
          <Link className="subitem" to="/cadastrar-medico">
            Cadastrar
          </Link>
          <Link className="subitem" to="/listar-medicos">
            Listar
          </Link>
        </ul>
      </li>

      <li className="item">
        <span className="itemTitle">
          PACIENTES &nbsp; <i className="fas fa-caret-down"></i>
        </span>
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
        <span className="itemTitle">
          EXAMES &nbsp; <i className="fas fa-caret-down"></i>
        </span>
        <ul className="submenu">
          <Link className="subitem" to="/cadastrar-exame">
            Cadastrar
          </Link>
          <Link className="subitem" to="/solicitar-exame">
            Solicitar
          </Link>
          <Link className="subitem" to="/listar-exames">
            Listar
          </Link>
        </ul>
      </li>
    </ul>
  );
};

export default NavLinks;
