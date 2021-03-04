import NavLinks from './NavLinks';
import Profile from './Profile';
import { StyledDesktopNavbar, HamburguerButton } from './style';
import logo from '../../assets/logo-texto.svg';
import { Link } from 'react-router-dom';

const DesktopNavbar = (props: any) => {
  return (
    <StyledDesktopNavbar className={props.className}>
      <div className="container">
        <ul className="flexitem">
          <li className="item">
            <div>
              <Link to="/">
                <img className="logo" src={logo} alt="Logo do syslaudo" />
              </Link>
            </div>
          </li>
        </ul>
        <NavLinks />
        <Profile />
        <HamburguerButton onClick={props.toggleMobile} onMouseDown={e => e.preventDefault()}><i className="fas fa-bars"></i></HamburguerButton>
      </div>
    </StyledDesktopNavbar>
  );
};

export default DesktopNavbar;
