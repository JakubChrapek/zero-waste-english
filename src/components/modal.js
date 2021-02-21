import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import { AnimatePresence, motion } from "framer-motion"
import { GrClose } from "react-icons/gr"
import VideoPlayer from "./videoPlayer"

const ExitButtonStyles = styled(motion.button)`
  background-color: transparent;
  border: 0;
  align-self: flex-end;
  margin-bottom: 16px;
  &:active,
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }

  path {
    stroke: var(--white);
  }
`

const Modal = ({
  isModalOpened,
  isVideoLoaded,
  setIsVideoLoaded,
  handleCloseModal,
}) => {
  return (
    <ReactModal
      isOpen={isModalOpened}
      closeTimeoutMS={500}
      contentLabel="Szkoła języka angielskiego z Agnieszką"
      onRequestClose={handleCloseModal}
      shouldCloseOnOverlayClick={true}
      shouldCloseOnEsc={true}
      style={{
        overlay: {
          zIndex: 5,
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        },
        content: {
          inset: 0,
          border: 0,
          backgroundColor: "transparent",
          zIndex: 5,
          position: "relative",
          padding: "0",
          overflow: "hidden",
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
        <GrClose size="32px" color="var(--white)" />
      </ExitButtonStyles>
      <AnimatePresence>
        {isModalOpened && (
          <VideoPlayer
            isVideoLoaded={isVideoLoaded}
            setIsVideoLoaded={setIsVideoLoaded}
          />
        )}
      </AnimatePresence>
    </ReactModal>
  )
}

export default Modal
