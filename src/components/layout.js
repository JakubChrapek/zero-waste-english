import React, { useEffect, useState } from "react"
import { Helmet } from "react-helmet"
import { createGlobalStyle, css } from "styled-components"
import Header from "./header"
import ReactModal from "react-modal"
import "@fontsource/dm-serif-display"
import "@fontsource/dm-sans"
import Modal from "./modal"

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
    &.no-js {
      visibility: hidden;
    }
    ${({ bodyScrollLock }) =>
      bodyScrollLock &&
      css`
        overflow: hidden;
        height: 100vh;
      `}
  }

  button {
    cursor: pointer;
  }

  h1 {
    font-family: "DM Serif Display";
  }
  .ReactModal__Overlay {
    opacity: 0;
    transition: opacity 500ms ease;
    &--after-open {
      opacity: 1;
      &:focus {
        outline: none;
      }
    }
    &--before-close {
      opacity: 0;
    }
  }

  .ReactModal__Content {
    width: calc(100% - 40px);
    @media (min-width: 1023px) {
      width: calc(100% - 80px);
    }
    @media (min-width: 1200px) {
      width: calc(100% - 160px);
      max-width: 1280px;
    }
  }

  .close-modal {
    button {
      background-color: transparent;
      border: none;
      cursor: pointer;
      margin-bottom: 16px;
      margin-right: -8px;
      align-self: flex-end;
      &:active,
      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: 2px solid var(--black);
        outline-offset: 4px;
      }
    }
  }
`

ReactModal.setAppElement("#mainapp")

const navigationData = {
  navOpened: false,
  setNavOpened: () => {},
}
const modalData = {
  modalOpened: false,
  setModalOpened: () => {},
}

export const NavContext = React.createContext(navigationData)
export const ModalContext = React.createContext(modalData)

const Layout = ({ title, children }) => {
  const [isNavigationOpened, setIsNavigationOpened] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpened(false)
    setIsVideoLoaded(false)
  }

  useEffect(() => {
    function handleEsc(event) {
      if (event.defaultPrevented) {
        return // Do nothing if the event was already processed
      }

      if (event.key === "Esc") {
        handleCloseModal()
      }
    }

    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
  }, [])

  return (
    <div id="mainapp">
      <NavContext.Provider
        value={{
          navOpened: isNavigationOpened,
          setNavOpened: setIsNavigationOpened,
        }}
      >
        <ModalContext.Provider
          value={{
            modalOpened: isModalOpened,
            setModalOpened: setIsModalOpened,
          }}
        >
          <GlobalStyles bodyScrollLock={isNavigationOpened || isModalOpened} />
          <Helmet>
            <title>
              {title ? title : "Nauka angielskiego | Zero Waste English"}
            </title>
          </Helmet>
          <Header
            isNavigationOpened={
              isNavigationOpened ? isNavigationOpened : undefined
            }
            setIsNavigationOpened={setIsNavigationOpened}
          />
          <Modal
            isModalOpened={isModalOpened}
            setIsModalOpened={setIsModalOpened}
            handleCloseModal={handleCloseModal}
            isVideoLoaded={isVideoLoaded}
            setIsVideoLoaded={setIsVideoLoaded}
          />
          <main>{children}</main>
        </ModalContext.Provider>
      </NavContext.Provider>
    </div>
  )
}

export default Layout
