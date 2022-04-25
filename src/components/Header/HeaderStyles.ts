import styled from "styled-components";
import { Container } from "../../globalStyles";
import myLogo from "/images/logo-branco.png";

export const Nav = styled.nav`
  background: transparent;
  margin-bottom: -80px;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: absolute;
  top: 0;
  z-index: 50;
  width: 100%;
  transition: background-color 0.3s ease-in;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: start;
  height: 60px;
  margin-top: 20px;
  ${Container}
`;

export const NavLogo = styled.img.attrs({
  src: `${myLogo}`,
})`
  justify-self: flex-start;
  cursor: pointer;
  display: flex;
  align-items: center;
  z-index: 50;
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  width: 100%;
  > li:first-child {
    margin-left: auto;
  }
`;

export const NavItem = styled.li`
  display: flex;
  cursor: pointer;
`;

export const NavLinks = styled.span`
  color: #fff;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0.5rem 1rem;
  height: 100%;
  &:hover {
    color: #05ea91;
    transition: all 0.3s ease;
  }
`;
