import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavMenu,
  NavItem,
  NavLinks,
} from "./HeaderStyles";

export default function Header() {
  return (
    <Nav>
      <NavbarContainer>
        <NavLogo />
        <NavMenu>
          <NavItem>
            <NavLinks>Seasons</NavLinks>
            <NavLinks>Leagues</NavLinks>
            <NavLinks>Games</NavLinks>
          </NavItem>
        </NavMenu>
      </NavbarContainer>
    </Nav>
  );
}
