import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SectionStyles = styled.section`
  height: calc(100vh - 80px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 28px 15%;
  position: relative;
  background-color: ${({ bg }) => (bg ? bg : "var(--green)")};
  @media (min-width: 1024px) {
    height: calc(100vh - 120px);
  }
`

const LinkStyles = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);
  padding: 16px 0;
  text-align: center;
  margin-top: 0.8em;
  position: relative;

  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 2px;
  transition: background-size 0.3s;

  &:hover {
    background-size: 100% 2px;
  }

  &:focus-visible,
  &:active {
    outline: none;
    background-size: 100% 2px;
  }

  @media (min-width: 767px) {
    font-size: 42px;
  }
`

const HeaderStyles = styled.h1`
  color: var(--white);
  font-size: 2rem;
  text-align: center;
  @media (min-width: 767px) {
    font-size: 7rem;
  }
`

const BgSection = ({ bg, top, title, linkAnchor, linkText, children }) => {
  return (
    <SectionStyles bg={bg} top={top}>
      <HeaderStyles>{title}</HeaderStyles>
      <LinkStyles to={linkAnchor ? linkAnchor : "/"}>
        {linkText ? linkText : "Wróć na główną"} &rarr;
      </LinkStyles>
    </SectionStyles>
  )
}

export default BgSection
