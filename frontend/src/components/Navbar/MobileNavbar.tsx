import React from 'react';
import NavLinks from './NavLinks';
import Profile from './Profile';
import { StyledMobileNavbar } from './style';

const MobileNavbar = (props: any) => {
  return (
    <StyledMobileNavbar displayMobile={props.displayMobile}>
      <NavLinks />
      <Profile />
    </StyledMobileNavbar>
  );
};

export default MobileNavbar;
