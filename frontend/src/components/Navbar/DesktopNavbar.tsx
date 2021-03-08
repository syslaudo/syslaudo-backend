import Logo from './Logo';
import NavLinks from './NavLinks';
import Profile from './Profile';
import { HamburguerButton, StyledDesktopNavbar } from './style';

const DesktopNavbar = (props: any) => {
  return (
    <StyledDesktopNavbar className={props.className}>
      <div className="container">
        <Logo />
        <NavLinks />
        <Profile />
        <HamburguerButton
          onClick={props.toggleMobile}
          onMouseDown={(e) => e.preventDefault()}
        >
          <i className="fas fa-bars"></i>
        </HamburguerButton>
      </div>
    </StyledDesktopNavbar>
  );
};

export default DesktopNavbar;
