import { Link } from 'react-router-dom';
import { ReactComponent as LogoTexto } from '../../assets/logo-texto.svg';

const Logo = () => {
  return (
    <ul className="logo">
      <li className="item">
        <div>
          <Link to="/">
            <LogoTexto className="svgImg" />
          </Link>
        </div>
      </li>
    </ul>
  );
};

export default Logo;
