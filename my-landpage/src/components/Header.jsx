import React from "react";
import styled from "@emotion/styled";
import myLogo from "../images/logo.png";

export default function Header() {
  
  const MainContainer = styled.header`
    height: 120px;
    background-color: #000;
    padding: 0 50px;
    margin: auto;
    display: flex;
    align-items: center;
  `;
  const Logo = styled.div`
    width: 60px;
    height: 60px;
    transition: 0.6s;
    overflow: hidden;
  `;
  const LogoImg = styled.img`
    width: 60px;
    height: 60px;
    transition: 0.3s;
    &:hover {
      transform: rotateZ(35deg);
    }
  `;
  const Menu = styled.nav`
    flex: 1;
    display: flex;
    justify-content: flex-end;
  `;

  const MenuItem = styled.li`
    list-style: none;
  `;

  const MenuLink = styled.a`
    color: #fff;
    height: 100px;
    text-transform: capitalize;
    font-weight: 600;
    font-size: 13px;
    text-decoration: none;
    display: flex;
    align-items: center;
    padding: 0 10px;
    border-bottom: 4px solid #000;
    transition: 0.7s ease;
    &:hover {
      border-bottom: 3px solid var(--primary);
      color: var(--primary);
    }
  `;
  const NavMenu = styled.ul`
    display: flex;
  `;

  return (
    <MainContainer>
      <Logo>
        <LogoImg src={myLogo} alt="" />
      </Logo>
      <Menu>
        <NavMenu>
          <MenuItem className="active">
            <MenuLink href="">Home</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">About Us</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Services</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Our Projects</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Our Team</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Happy Client</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Price</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Some Facts</MenuLink>
          </MenuItem>
          <MenuItem className="active">
            <MenuLink href="">Contact Us</MenuLink>
          </MenuItem>
        </NavMenu>
      </Menu>
    </MainContainer>
  );
}
