import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle, css } from "styled-components"
import Header from "./header"
import "@fontsource/dm-serif-display"
import "@fontsource/dm-sans"

const GlobalStyles = createGlobalStyle`
  html {
    --white: #F4F4F4;
    --black: #121212;
    --green : #326D63;
    --pink: #C37674;
  }

  *, *:after, *:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  } 

  body {
    font-family: "DM Sans";
    overflow-x: hidden;
    ${({ bodyScrollLock }) =>
      bodyScrollLock &&
      css`
        overflow: hidden;
        height: 100vh;
      `}
  }

  h1 {
    font-family: "DM Serif Display";
  }
`

const Layout = ({ title, children }) => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)

  return (
    <>
      <GlobalStyles bodyScrollLock={isNavigationOpened} />
      <Helmet>
        <title>
          {title ? title : "Nauka angielskiego | Zero Waste English"}
        </title>
      </Helmet>
      <Header
        isNavigationOpened={isNavigationOpened}
        setIsNavigationOpened={setIsNavigationOpened}
      />
      <main>{children}</main>
    </>
  )
}

export default Layout
