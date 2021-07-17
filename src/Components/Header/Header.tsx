import React, { useState } from "react";
import styled from "styled-components";
import { Theme } from "Theme/Theme.types";
import { Props } from "./Header.types";

const StyledHeader = styled.header`
  font-family: ${(props: { theme: Theme }) => props.theme.text.font};
  width: 100%;
  position: fixed;
  bottom: 0;
  left: 0;
  color: ${(props: { theme: Theme }) => props.theme.textColor};
  z-index: ${(props: { theme: Theme }) => props.theme.spacing.z_fixed};
  background-color: ${(props: { theme: Theme }) => props.theme.bodyColor};
`;

const Nav = styled.nav`
  max-width: 968px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: ${(props: { theme: Theme }) => props.theme.measurements.headerHeight};
  margin-left: ${(props: {theme: Theme}) => props.theme.spacing.mb_1_5};
  margin-right: ${(props: {theme: Theme}) => props.theme.spacing.mb_1_5};
`;

const NavLogo = styled.a`
  color: ${(props: { theme: Theme }) => props.theme.titleColor};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};
  text-decoration: none;

  :hover {
    color: ${(props: { theme: Theme }) => props.theme.firstColor};
  }
`;

const NavMenu = styled.div<{ showMenu: boolean }>`
  @media only screen and (max-width: 767px) {
    position: fixed;
    bottom: ${props => props.showMenu ? 0 : "-100%"};
    left: 0;
    width: 100%;
    background-color: ${(props: { theme: Theme }) => props.theme.bodyColor};
    padding: 2rem 1.5rem;
    box-shadow: 0 -1px 4px rgba(0, 0, 0, .15);
    border-radius: 1.5rem 1.5rem 0 0;
    transition: 0.3s;
  }
`;

const NavList = styled.ul`
  display: grid;
  list-style: none;

  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`;

const NavItem = styled.li`
`;

const NavItemLink = styled.a`
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: ${(props: { theme: Theme }) => props.theme.text.smallFontSize};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};
  color: ${(props: { theme: Theme }) => props.theme.titleColor};

  :hover {
    color: ${(props: { theme: Theme }) => props.theme.firstColor};
  }
`;

const NavButtons = styled.div`

`;

const NavIcon = styled.i`
  font-size: 1.2rem;
`;

const NavToggle = styled.div`
  color: ${(props: { theme: Theme }) => props.theme.titleColor};
  font-weight: ${(props: { theme: Theme }) => props.theme.text.fontMedium};
  font-size: 1.1.rem;
  cursor: pointer;

  :hover {
    color: ${(props: { theme: Theme }) => props.theme.firstColor};
  }
`;

const NavClose = styled.i`
  position: absolute;
  right: 1.3rem;
  bottom: 0.5rem;
  font-size: 1.5rem;
  cursor: pointer;
  color: ${(props: { theme: Theme }) => props.theme.firstColor};

  :hover {
    color: ${(props: { theme: Theme }) => props.theme.firstColorAlt};
  }
`;

export const Header: React.FC<Props> = (props) => {
  const [showMenu, setShowMenu] = useState(false);

  const getNavItems = () => {
    return props.navItems.map(item => (
      <NavItem>
        <NavItemLink href={item.link} onClick={() =>  setShowMenu(false)}>
          <NavIcon className={item.uniconIcon}></NavIcon> {item.label}
        </NavItemLink>
      </NavItem>
    ))
  }

  return (
    <StyledHeader id="header">
      <Nav>
        <NavLogo href="#">{props.logoTitle}</NavLogo>

        <NavMenu id="nav-menu" showMenu={showMenu}>
          <NavList>
            {getNavItems()}
          </NavList>
        </NavMenu>

        {showMenu && <NavClose className="uil uil-times" id="nav-close" onClick={() =>  setShowMenu(false)}></NavClose>}

        {
          !showMenu &&
          <NavButtons>
            <NavToggle id="nav-toggle" onClick={() => setShowMenu(true)}>
              <i className="uil uil-apps"></i>
            </NavToggle>
          </NavButtons>
        }
      </Nav>
    </StyledHeader>
  );
}