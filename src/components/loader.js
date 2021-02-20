import React from "react"
import ReactLoader from "react-loader"
import styled from "styled-components"

const StyledLoader = styled(ReactLoader)`
  opacity: 1;
  transition: opacity 0.3s ease-in;
  &.loaded {
    opacity: 0;
  }
`

const Loader = ({ loaded }) => {
  return (
    <StyledLoader
      lines={12}
      length={14}
      width={8}
      radius={24}
      color="var(--black)"
      trail={80}
      corners={15}
      shadow={true}
      loaded={loaded}
      loadedClassName="loaded"
    />
  )
}

export default Loader
