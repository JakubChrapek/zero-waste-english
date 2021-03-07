import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player/youtube"
import { motion } from "framer-motion"

const VideoPlayerStyles = styled(motion.div)`
  position: relative;
  width: 100%;
  &:before {
    display: block;
    content: "";
    width: 100%;
    padding-top: calc((51 / 53) * 100%);
  }
  @media (min-width: 767px) {
    &:before {
      padding-top: calc((9 / 16) * 100%);
    }
  }

  > .react-player {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  }

  .react-player__preview {
    background-size: contain !important;
    background-repeat: no-repeat;
  }
`

const VideoPlayer = ({ url, isVideoLoaded, setIsVideoLoaded, onReady }) => {
  return (
    <VideoPlayerStyles
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, transition: { duration: 0.7, delay: 0.5 } }}
      exit={{ opacity: 0 }}
    >
      <ReactPlayer
        className="react-player"
        url={url ? url : "https://www.youtube.com/watch?v=RRfiddT5-aM"}
        width="100%"
        height="100%"
        onReady={() => {
          setIsVideoLoaded(true)
        }}
        controls
      />
    </VideoPlayerStyles>
  )
}

export default VideoPlayer
