import Logo from './Logo';
import { StyledDesktopNavbar } from './style';

const LoginNavbar = (props: any) => {
  return (
    <StyledDesktopNavbar className={props.className}>
      <div className="container">
      <Logo />
      </div>
    </StyledDesktopNavbar>
  );
};

export default LoginNavbar;
