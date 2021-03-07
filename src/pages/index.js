import React from "react"
import { graphql } from "gatsby"
import useWindowSize from "../utils/useWindowSize"
import Img from "gatsby-image"
import styled from "styled-components"
import Button from "../components/button"
import { FiArrowUpRight, FiArrowDownLeft } from "react-icons/fi"
import { GrPlayFill } from "react-icons/gr"
import { ModalContext } from "../components/layout"
import { Element, Link as ScrollLink } from "react-scroll"
import { motion } from "framer-motion"
import { useContext } from "react"

const HomeContainer = styled.div`
  position: relative;
  min-height: 100vh;
  background-color: var(--green);
  @media (min-width: 1024px) {
    min-height: unset;
  }
`

const HomeStyles = styled.section`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 0 28px 82px;
  max-width: 1440px;
  margin: 0 auto;

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

  @media (min-width: 1024px) {
    flex-direction: row;
    height: calc(100vh - 120px);
    padding: 0 40px 82px;
    align-items: center;
    gap: 40px;
    > * {
      flex-basis: 50%;
    }
    h2 {
      font-size: 54px;
    }

    p {
      font-size: 24px;
      font-weight: 400;
    }

    .text--uppercase {
      margin-left: 28px;
      margin-top: 0;
    }
  }

  @media (min-width: 1200px) {
    padding: 0 80px 82px;
    h2 {
      font-size: 60px;
    }
  }
  @media (min-width: 1440px) {
    h2 {
      font-size: 72px;
    }
  }
  @media (min-width: 1600px) {
    align-items: flex-start;
  }
`

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex-basis: 65%;

  > div {
    margin-top: 3em;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
  }

  @media (min-width: 767px) {
    max-width: 460px;
    margin: 0 auto;
  }

  @media (min-width: 1024px) {
    max-width: unset;
    margin: 0;
    text-align: left;
    align-items: flex-start;

    > div {
      margin-top: 4em;
      flex-direction: row;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;
  margin-top: 70px;
  flex-basis: 35%;
  button {
    position: absolute;
    left: 20px;
    bottom: 40px;
    width: 75px;
    height: 75px;
    @media (min-width: 767px) {
      height: 130px;
      width: 130px;
    }
    border: 0;
    border-radius: 100%;
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding-left: 8px;
    cursor: pointer;

    &:focus-visible,
    &:active,
    &:focus {
      filter: drop-shadow(0px 0px 5px var(--black));
      outline: 2px solid var(--white);
      transform: scale(0.95);
    }
  }
`

const StyledArrowDown = styled(FiArrowDownLeft)`
  margin-left: 10px;
`

const HomePage = ({ data }) => {
  const { setModalOpened } = useContext(ModalContext)
  const width = useWindowSize()
  return (
    <HomeContainer>
      <HomeStyles>
        <TextContainer>
          <h2>Ucz się angielskiego, dbaj o&nbsp;środowisko.</h2>
          <p>
            Zapomnij o&nbsp;stosach papierów, drogich podręcznikach
            i&nbsp;kserówkach. Odkryj, jak zajęcia online mogą wyglądać
            w&nbsp;XXI wieku!
          </p>
          <div>
            <Button
              flex="1 1 65%"
              color="pink"
              onClick={() => setModalOpened(true)}
            >
              Zarezerwuj lekcję
            </Button>
            <ScrollLink to="video" duration={300} offset={80} smooth={true}>
              <p className="text--uppercase">
                Zobacz lekcję próbną
                {width < 767 ? (
                  <StyledArrowDown color="var(--white)" size="24px" />
                ) : (
                  <FiArrowUpRight color="var(--white)" size="24px" />
                )}
              </p>
            </ScrollLink>
          </div>
        </TextContainer>
        <Element name="video">
          <ImageWrapper>
            <Img fluid={data.bg.fluid} alt="Agnieszka smiling at camera" />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setModalOpened(true)}
            >
              <GrPlayFill
                size={width > 767 ? "48px" : "30px"}
                color="var(--black)"
              />
            </motion.button>
          </ImageWrapper>
        </Element>
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
