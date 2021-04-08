import { Link } from "react-router-dom";

const Profile = () => {
  return (
    <ul className="profile">
      <li className="item">
        <div className="itemTitle itemTitleComImagem">
          <span>%USERNAME% &nbsp;&nbsp;</span>
          <span>
            <i className="far fa-user-circle"></i>
          </span>
        </div>
        <ul className="submenu">
          <Link className="subitem" to="/configuracoes">
            Configurações
          </Link>
          <a className="subitem" href="/">
            Sair
          </a>
        </ul>
      </li>
    </ul>
  );
};

export default Profile;
