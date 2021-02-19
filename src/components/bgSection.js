import { Link } from "gatsby"
import React from "react"
import styled from "styled-components"

const SectionStyles = styled.section`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 28px 20px;
  position: relative;
  background-color: ${({ bg }) => (bg ? bg : "var(--green)")};
`

const LinkStyles = styled(Link)`
  font-size: 24px;
  font-weight: 600;
  text-decoration: none;
  color: var(--white);
  padding: 16px 0;
  text-align: center;
  margin-top: 0.8em;

  &:focus-visible,
  &:active {
    outline: 2px solid var(--white);
    outline-offset: -1px;
  }
`

const HeaderStyles = styled.h1`
  color: var(--white);
  font-size: 2rem;
  text-align: center;
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
