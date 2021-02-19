import React from "react"
import styled from "styled-components"
import ReactPlayer from "react-player/youtube"

const VideoPlayerStyles = styled.div`
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

const VideoPlayer = ({ previewImg, url }) => {
  return (
    <VideoPlayerStyles>
      <ReactPlayer
        className="react-player"
        url={url ? url : "https://www.youtube.com/watch?v=ysz5S6PUM-U"}
        light={previewImg ? previewImg : undefined}
        width="100%"
        height="100%"
      />
    </VideoPlayerStyles>
  )
}

export default VideoPlayer
