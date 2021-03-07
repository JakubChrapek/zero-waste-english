import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import Navigation from "./navigation"

const HeaderWrapper = styled.div`
  background-color: var(--green);
`

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
  a {
    text-decoration: none;
  }

  @media (min-width: 1024px) {
    padding: 24px 40px;
    height: 120px;
  }
  @media (min-width: 1200px) {
    padding: 24px 80px;
  }
`

const LogoStyles = styled(Link)`
  padding: 8px 0;
  z-index: 3;
  flex-basis: 20%;
  min-width: 118px;

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
      isNavigationOpened={isNavigationOpened ? isNavigationOpened : undefined}
      onClick={closeNavigation}
      to="/"
    >
      <h1>Zero Waste</h1>
    </LogoStyles>
  )
}

const Header = ({ isNavigationOpened, setIsNavigationOpened }) => {
  const closeNavigation = () => {
    setIsNavigationOpened(false)
  }
  return (
    <HeaderWrapper>
      <HeaderStyles>
        <Logo
          isNavigationOpened={
            isNavigationOpened ? isNavigationOpened : undefined
          }
          closeNavigation={closeNavigation}
        />
        <Navigation
          isNavigationOpened={
            isNavigationOpened ? isNavigationOpened : undefined
          }
          setIsNavigationOpened={setIsNavigationOpened}
          closeNavigation={closeNavigation}
        />
      </HeaderStyles>
    </HeaderWrapper>
  )
}

export default Header
