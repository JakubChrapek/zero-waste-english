import React from "react"
import styled from "styled-components"
import ReactModal from "react-modal"
import { motion } from "framer-motion"
import { GrClose } from "react-icons/gr"
import VideoPlayer from "./videoPlayer"

const ExitButtonStyles = styled(motion.button)`
  background-color: transparent;
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

const Modal = ({ isModalOpened, setIsVideoLoaded, handleCloseModal }) => {
  return (
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
            backgroundColor: "transparent",
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
  )
}

export default Modal
