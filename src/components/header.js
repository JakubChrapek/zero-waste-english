import React, { useState } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./navigation"

const HeaderStyles = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 32px 24px;
  max-width: 1440px;
  margin: 0 auto;
  background-color: transparent;
  position: relative;
  z-index: 2;
  height: 80px;

  h1 {
    font-size: 1.8rem;
    letter-spacing: 0.8px;
    line-height: 1em;
    font-weight: bold;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 767px) {
    padding: 32px 60px;
  }

  @media (min-width: 1024px) {
    height: 120px;
    padding: 0 60px;
    h1 {
      font-size: 2rem;
    }
  }
`

const LogoStyles = styled(Link)`
  padding: 18px 0;
  z-index: 3;

  &:focus-visible,
  &:active {
    outline: 2px solid ${({ dark }) => (dark ? "var(--black)" : "var(--white)")};
    outline-offset: 4px;
  }
  h1 {
    color: ${({ dark }) => (dark ? "var(--black)" : "var(--white)")};
  }
`

const Logo = ({ isNavigationOpened, closeNavigation }) => {
  return (
    <LogoStyles onClick={closeNavigation} dark={isNavigationOpened} to="/">
      <h1>loopstudios</h1>
    </LogoStyles>
  )
}

const Header = () => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)
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
