import React from "react"
import { graphql } from "gatsby"
import useWindowSize from "../utils/useWindowSize"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi"
import VideoPlayer from "../components/videoPlayer"
import * as Scroll from "react-scroll"
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
  scrollSpy,
  scroller,
} from "react-scroll"

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--green);
`

const HomeStyles = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 28px 82px;
  h2 {
    font-family: "DM Serif Display";
    color: var(--white);
    font-size: 36px;
    line-height: 1.38;
    font-weight: 400;
    margin-top: 1em;
  }

  p {
    color: var(--white);
    font-size: 18px;
    line-height: 1.31;
    margin-top: 1.5em;

    &.text--uppercase {
      display: inline-flex;
      align-items: center;
      font-weight: 400;
      font-size: 18px;
      line-height: 1.31;
      text-transform: uppercase;
      color: var(--white);
    }
  }

  @media (min-width: 767px) {
  }

  @media (min-width: 1024px) {
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 767px) {
    max-width: 460px;
    margin: 0 auto;
  }
`

const StyledArrowDown = styled(FiArrowDownLeft)`
  margin-left: 10px;
`

const HomePage = ({ data }) => {
  const width = useWindowSize()
  return (
    <HomeContainer>
      <HomeStyles>
        <TextContainer>
          <h2>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Libero,
            natoque tristique consequat sagittis, faucibus eu amet ridiculus.
          </p>
          <Button color="pink" margin="2em 0 0 0">
            Book a class
          </Button>
          <ScrollLink to="video" duration={300} offset={80} smooth={true}>
            <p className="text--uppercase">
              Watch sample lesson
              {width < 767 ? (
                <StyledArrowDown color="var(--white)" size="24px" />
              ) : (
                <FiArrowUpRight color="var(--white)" size="24px" />
              )}
            </p>
          </ScrollLink>
        </TextContainer>
        <Element name="video">
          <VideoPlayer previewImg={data.bg.fluid.src} />
        </Element>
        {/* <VideoPlayer /> */}
      </HomeStyles>
    </HomeContainer>
  )
}

export default HomePage

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    bg: imageSharp(fluid: { originalName: { eq: "ag-bg.png" } }) {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
