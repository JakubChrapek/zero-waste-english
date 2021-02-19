import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./navigation"

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 28px;
  max-width: 1440px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
  height: 80px;
  background-color: var(--green);
  a {
    text-decoration: none;
  }
`

const LogoStyles = styled(Link)`
  padding: 8px 0;
  z-index: 3;

  &:focus,
  &:active {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }
  h1 {
    font-size: 1.5rem;
    line-height: 1.375;
    color: ${({ isNavigationOpened }) =>
      isNavigationOpened ? "var(--green)" : "var(--white)"};
    font-weight: normal;
  }
`

const Logo = ({ isNavigationOpened, closeNavigation }) => {
  return (
    <LogoStyles
      isNavigationOpened={isNavigationOpened}
      onClick={closeNavigation}
      to="/"
    >
      <h1>Zero Waste English</h1>
    </LogoStyles>
  )
}

const Header = ({ isNavigationOpened, setIsNavigationOpened }) => {
  const closeNavigation = () => {
    setIsNavigationOpened(false)
  }
  return (
    <HeaderStyles>
      <Logo
        isNavigationOpened={isNavigationOpened}
        closeNavigation={closeNavigation}
      />
      <Navigation
        isNavigationOpened={isNavigationOpened}
        setIsNavigationOpened={setIsNavigationOpened}
        closeNavigation={closeNavigation}
      />
    </HeaderStyles>
  )
}

export default Header
