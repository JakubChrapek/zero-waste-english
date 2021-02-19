import React, { useState } from "react"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle, css } from "styled-components"
import Header from "./header"
import "@fontsource/dm-serif-display"
import "@fontsource/dm-sans"
import ReactModal from "react-modal"
import VideoPlayer from "./videoPlayer"
import { AnimatePresence, motion } from "framer-motion"
import { GrClose } from "react-icons/gr"

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
  .ReactModal__Content--after-open {
    &:focus {
      outline: none;
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

  const handleCloseModal = () => {
    setIsModalOpened(false)
  }

  const StyledModal = styled(ReactModal)`
    button {
      background: transparent;
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
  `

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
            isNavigationOpened={isNavigationOpened}
            setIsNavigationOpened={setIsNavigationOpened}
          />
          <AnimatePresence exitBeforeEnter>
            {isModalOpened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <StyledModal
                  isOpen={isModalOpened}
                  contentLabel="tralala"
                  onRequestClose={handleCloseModal}
                  shouldCloseOnOverlayClick={true}
                  style={{
                    overlay: {
                      zIndex: 5,
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    content: {
                      zIndex: 5,
                      width: "100%",
                      padding: "20px 20px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseModal}
                  >
                    <GrClose size="24px" color="var(--black)" />
                  </motion.button>
                  <VideoPlayer />
                </StyledModal>
              </motion.div>
            )}
          </AnimatePresence>
          <main>{children}</main>
        </ModalContext.Provider>
      </NavContext.Provider>
    </div>
  )
}

export default Layout
