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
          <a className="subitem" href="/perfil">
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
