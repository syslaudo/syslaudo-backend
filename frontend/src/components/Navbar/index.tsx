import { useState } from 'react';
import DesktopNavbar from './DesktopNavbar';
import MobileNavbar from './MobileNavbar';

export default function Navbar() {
  const [displayMobile, setDisplayMobile] = useState(false);

  const toggleMobile = () => {
    displayMobile ? setDisplayMobile(false) : setDisplayMobile(true);
  };

  return (
    <div>
      <DesktopNavbar toggleMobile={toggleMobile} />
      <MobileNavbar displayMobile={displayMobile} />
    </div>
  );
}
