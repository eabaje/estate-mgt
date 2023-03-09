import React from "react";
import Link from "next/link";
import {
  HeaderContainer,
  Logo,
  LogoDetail,
  Menu,
  MenuContent,
  MenuItem,
} from "./styles";

function Header() {
  return (
    <HeaderContainer className="container">
      <Logo href="/">
        <LogoDetail>Panorama</LogoDetail>Holdings
      </Logo>
      <Menu>
        <MenuContent>
          <Link href="#">
            <MenuItem>Home</MenuItem>
          </Link>
          <Link href="/explore">
            <MenuItem>Explore</MenuItem>
          </Link>
          <Link href="#">
            <MenuItem>Login</MenuItem>
          </Link>
          <Link href="#">
            <MenuItem>Contact Us</MenuItem>
          </Link>
        </MenuContent>
      </Menu>
    </HeaderContainer>
  );
}

export default Header;
