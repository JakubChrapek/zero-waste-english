import React from "react"
import { Link } from "gatsby"
import { Helmet } from "react-helmet"
import { createGlobalStyle } from "styled-components"
import Header from "./header"
import "@fontsource/alata"
import "@fontsource/josefin-sans/300.css"

const GlobalStyles = createGlobalStyle`
  html {
    --white: #fff;
    --black: #2d2d2d;
  }

  *, *:after, *:before {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  } 

  body {
    font-family: "Josefin Sans";
    height: 100vh;
    overflow: hidden;
  }

  h1 {
    font-family: "Alata";
  }
`

const Layout = ({ title, children }) => {
  return (
    <>
      <GlobalStyles />
      <Helmet>
        <title>
          {title
            ? title
            : "Wirtualna rzeczywistość w Twoim biznesie | loopstudios"}
        </title>
      </Helmet>
      <Header />
      <main>{children}</main>
    </>
  )
}

export default Layout
