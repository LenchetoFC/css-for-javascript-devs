import React from "react";
import styled from "styled-components";

import { COLORS, WEIGHTS, QUERIES } from "../../constants";
import Logo from "../Logo";
import SuperHeader from "../SuperHeader";
import MobileMenu from "../MobileMenu";
import VisuallyHidden from "../VisuallyHidden";
import Icon from "../Icon";
import UnstyledButton from "../UnstyledButton";

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = React.useState(false);

  // For our mobile hamburger menu, we'll want to use a button
  // with an onClick handler, something like this:
  //
  // <button onClick={() => setShowMobileMenu(true)}>

  return (
    <header>
      <SuperHeader />
      <MainHeader>
        <LogoWrapper>
          <Logo />
        </LogoWrapper>

        <MobileActions>
          <UnstyledButton>
            <Icon id="shopping-bag" strokeWidth={2} color="black" />
            <VisuallyHidden>Open Cart</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton>
            <Icon id="search" strokeWidth={2} color="black" />
            <VisuallyHidden>Search</VisuallyHidden>
          </UnstyledButton>

          <UnstyledButton onClick={() => setShowMobileMenu(true)}>
            <Icon id="menu" strokeWidth={2} color="black" />
            <VisuallyHidden>Open Menu</VisuallyHidden>
          </UnstyledButton>
        </MobileActions>

        <DesktopNav>
          <NavLink href="/sale">Sale</NavLink>
          <NavLink href="/new">New&nbsp;Releases</NavLink>
          <NavLink href="/men">Men</NavLink>
          <NavLink href="/women">Women</NavLink>
          <NavLink href="/kids">Kids</NavLink>
          <NavLink href="/collections">Collections</NavLink>
        </DesktopNav>

        <Filler />
      </MainHeader>

      <MobileMenu
        isOpen={showMobileMenu}
        onDismiss={() => {
          console.log(showMobileMenu);
          setShowMobileMenu(false);
        }}
      />
    </header>
  );
};

const MainHeader = styled.div`
  display: flex;
  align-items: baseline;
  padding: 18px 32px;
  /* height: 72px; */
  border-bottom: 1px solid var(--color-gray-300);
  overflow: auto;

  @media ${QUERIES.tabletMaxWidth} {
    & {
      border-top: 4px solid var(--color-gray-900);
      align-items: center;
      justify-content: space-between;
    }
  }

  @media ${QUERIES.phoneMaxWidth} {
    & {
      padding-inline: 16px;
    }
  }
`;

const NavLink = styled.a`
  font-size: 1.125rem;
  text-transform: uppercase;
  text-decoration: none;
  color: var(--color-gray-900);
  font-weight: var(--font-weight-medium);

  &:first-of-type {
    color: var(--color-secondary);
  }
`;

const DesktopNav = styled.nav`
  display: flex;
  gap: clamp(1rem, 8.1vw - 4rem, 3rem);
  margin: 0px 48px;

  @media ${QUERIES.tabletMaxWidth} {
    & {
      display: none;
    }
  }
`;

const MobileActions = styled.div`
  display: none;

  @media ${QUERIES.tabletMaxWidth} {
    & {
      display: flex;
      gap: 32px;
    }
  }
  @media ${QUERIES.phoneMaxWidth} {
    & {
      display: flex;
      gap: 16px;
    }
  }
`;

const LogoWrapper = styled.div`
  flex: 1;

  @media ${QUERIES.tabletMaxWidth} {
    flex: revert;
  }
`;

const Filler = styled.div`
  flex: 1;
  @media ${QUERIES.tabletMaxWidth} {
    & {
      display: none;
    }
  }
`;

export default Header;
