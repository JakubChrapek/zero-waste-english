import React from "react"
import styled from "styled-components"
import { motion } from "framer-motion"

const ButtonStyles = styled(motion.button)`
  font-size: 18px;
  line-height: 1.27;
  text-transform: uppercase;
  color: var(--white);
  padding: 1.2em 2.2em;
  border: 0;
  cursor: pointer;
  margin: ${({ margin }) => margin};
  background-color: ${({ color }) =>
    color === "black" ? "var(--black)" : "var(--pink)"};
  overflow: hidden;
  position: relative;
  min-width: ${({ width }) => width};

  &:active,
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }

  span {
    z-index: 4;
  }

  @media (min-width: 1024px) {
    &:after {
      background-color: var(--white);
      content: "";
      height: 155px;
      width: 25%;
      left: -75px;
      top: -50px;
      opacity: 0.2;
      position: absolute;
      transform: translateX(-75px) rotate(35deg);
      transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
      z-index: 3;
    }

    &:hover {
      &:after {
        transform: translateX(calc(400% + 150px)) rotate(35deg);
        transition: transform 700ms cubic-bezier(0.19, 1, 0.22, 1);
      }
    }
  }
`

const Button = ({
  children,
  margin,
  color,
  size,
  navigation,
  onClick,
  width,
}) => {
  return (
    <ButtonStyles
      margin={margin}
      color={color}
      size={size}
      whileTap={{ scale: 0.98 }}
      navigation={navigation}
      onClick={onClick}
      width={width}
    >
      <span>{children}</span>
    </ButtonStyles>
  )
}

export default Button
