import React, { useState } from "react"
import { Helmet } from "react-helmet"
import styled, { createGlobalStyle, css } from "styled-components"
import Header from "./header"
import ReactModal from "react-modal"
import Loader from "./loader"
import VideoPlayer from "./videoPlayer"
import { AnimatePresence, motion } from "framer-motion"
import { GrClose } from "react-icons/gr"
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
  .ReactModal__Content--after-open {
    &:focus {
      outline: none;
    }
  }
  .close-modal {
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
  }
`

const ExitButtonStyles = styled(motion.button)`
  background: transparent;
  border: 0;
  align-self: flex-end;
  margin-bottom: 16px;
  margin-right: -8px;
  &:active,
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--black);
    outline-offset: 4px;
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
  const [isnavigationopened, setIsNavigationOpened] = useState(false)
  const [isModalOpened, setIsModalOpened] = useState(false)
  const [isVideoLoaded, setIsVideoLoaded] = useState(false)

  const handleCloseModal = () => {
    setIsModalOpened(false)
    setIsVideoLoaded(false)
  }

  return (
    <div id="mainapp">
      <NavContext.Provider
        value={{
          navOpened: isnavigationopened,
          setNavOpened: setIsNavigationOpened,
        }}
      >
        <ModalContext.Provider
          value={{
            modalOpened: isModalOpened,
            setModalOpened: setIsModalOpened,
          }}
        >
          <GlobalStyles bodyScrollLock={isnavigationopened || isModalOpened} />
          <Helmet>
            <title>
              {title ? title : "Nauka angielskiego | Zero Waste English"}
            </title>
          </Helmet>
          <Header
            isnavigationopened={
              isnavigationopened ? isnavigationopened : undefined
            }
            setIsNavigationOpened={setIsNavigationOpened}
          />
          <AnimatePresence>
            {isModalOpened && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                key="wrapper"
              >
                <ReactModal
                  isOpen={isModalOpened}
                  contentLabel="Szkoła języka angielskiego z Agnieszką"
                  onRequestClose={handleCloseModal}
                  shouldCloseOnOverlayClick={true}
                  style={{
                    overlay: {
                      zIndex: 5,
                      backgroundColor: "rgba(255,255,255,0.5)",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                    content: {
                      inset: 0,
                      border: 0,
                      background: "transparent",
                      zIndex: 5,
                      position: "relative",
                      width: "100%",
                      padding: "20px 20px 40px",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    },
                  }}
                >
                  <ExitButtonStyles
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleCloseModal}
                    className="close-modal"
                  >
                    <GrClose size="32px" color="var(--black)" />
                  </ExitButtonStyles>
                  {/* <Loader loaded={isVideoLoaded} /> */}
                  <VideoPlayer onReady={() => setIsVideoLoaded(true)} />
                </ReactModal>
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
