import { useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';
import { StyledNavbar } from './style';

export default function Navbar() {
  const [displayMobile, setDisplayMobile] = useState(
    false
  );

  const toggleMobile = () => {
    if (displayMobile) {
      setDisplayMobile(false);
    } else {
      setDisplayMobile(true);
    }
  };

    return (
      <StyledNavbar>
        <DesktopNavbar toggleMobile={toggleMobile}/>
        <MobileNavbar displayMobile={displayMobile} />
      </StyledNavbar>
    );
}
