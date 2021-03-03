const Profile = () => {
  return (
    <ul className="profile">
      <li className="item">
        <div className="submenuTitle">
          <span>%USERNAME% &nbsp;&nbsp;</span>
          <span>
            <i className="far fa-user-circle"></i>
          </span>
        </div>
        <ul className="submenu">
          <a className="subitem" href="/seu-perfil">
            Seu Perfil
          </a>
          <a className="subitem" href="/configuracoes">
            Configurações
          </a>
          <a className="subitem" href="/">
            Sair
          </a>
        </ul>
      </li>
    </ul>
  );
};

export default Profile;
