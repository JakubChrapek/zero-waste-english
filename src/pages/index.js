import React from "react"
import { graphql } from "gatsby"
import useWindowSize from "../utils/useWindowSize"
import Img from "gatsby-image"
import styled from "styled-components"

const HomeStyles = styled.section`
  height: 100vh;
  display: flex;
  align-items: center;
  padding: 0 24px;
  position: relative;
  top: -80px;
  h2 {
    font-weight: 300;
    text-transform: uppercase;
    font-size: 32px;
    line-height: 1.1;
    color: var(--white);
    padding: 20px 24px;
    border: 2px solid var(--white);
    z-index: 1;
    @media (min-width: 360px) {
      font-size: 38px;
    }
  }

  .gatsby-image-wrapper {
    position: absolute !important;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
  }

  @media (min-width: 767px) {
    padding: 0 60px;
    h2 {
      font-size: 80px;
      padding: 40px 60px 40px 50px;
    }
  }

  @media (min-width: 1024px) {
    top: -120px;
    padding: 0 60px;
    max-width: 1440px;
    margin: 0 auto;
    h2 {
      padding: 40px 100px 40px 50px;
    }
  }
`

const HomePage = ({ data }) => {
  const width = useWindowSize()
  return (
    <>
      <HomeStyles>
        <h2>
          Immersive {width > 1024 && <br />}experiences {width > 1024 && <br />}
          that {width < 767 && <br />}deliver
        </h2>
        <Img fluid={width < 1024 ? data.mobile.fluid : data.desktop.fluid} />
      </HomeStyles>
    </>
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
    mobile: imageSharp(
      fluid: { originalName: { eq: "image-hero-mobile.jpg" } }
    ) {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
    desktop: imageSharp(
      fluid: { originalName: { eq: "image-hero-desktop.jpg" } }
    ) {
      fluid(quality: 90, maxWidth: 1920) {
        ...GatsbyImageSharpFluid_withWebp
      }
    }
  }
`
