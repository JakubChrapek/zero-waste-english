import React, { useContext } from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"
import { ModalContext } from "../components/layout"
import Button from "../components/button"
import useWindowSize from "../utils/useWindowSize"

const ExitButton = styled(motion.button)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 46px;
  height: 46px;
  border: 0;
  position: relative;
  background-color: transparent;
  z-index: 3;
  outline: none;

  @media (min-width: 1024px) {
    display: none;
  }

  &:active,
  &:focus {
    outline: none;
  }

  &:focus-visible {
    outline: 2px solid var(--white);
    outline-offset: 4px;
  }

  &:after,
  &:before {
    content: "";
    position: absolute;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: var(--white);
    transition: transform 0.25s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  }

  &:after {
    top: 15px;
  }

  &:before {
    bottom: 15px;
  }

  ${({ navOpened }) =>
    navOpened &&
    css`
      &:active,
      &:focus {
        outline: none;
      }

      &:focus-visible {
        outline: 2px solid var(--green);
        outline-offset: 4px;
      }

      &:after {
        background-color: var(--green);
        transform: translateY(7px) rotate(-45deg);
      }
      &:before {
        background-color: var(--green);
        transform: translateY(-7px) rotate(45deg);
      }
    `}
`

const NavigationStyles = styled.nav`
  z-index: 2;

  ul {
    position: absolute;
    left: 0;
    top: 0;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    background-color: var(--white);
    width: 100%;
    list-style-type: none;
    opacity: 0;
    transition: opacity 0.2s ease;
    pointer-events: none;
    height: 100vh;
    padding-top: 80px;
    z-index: 2;

    &.show {
      pointer-events: all;
      opacity: 1;
      a {
        pointer-events: all;
      }
    }

    a {
      font-size: 18px;
      font-family: "DM Sans";
      color: var(--green);
      pointer-events: none;
      font-weight: 600;
      padding: 26px 12px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      transition: background-color 0.15s ease;
      position: relative;
      flex: 1 1 100%;
      display: inline-flex;
      justify-content: center;
      align-items: center;

      &:after {
        content: "";
        position: absolute;
        bottom: 0;
        left: 0;
        background-color: var(--white);
        width: 100%;
        height: 1px;
        transform-origin: center;
        transform: scaleX(0);
        transition: transform 0.3s ease;
      }

      &:focus-visible,
      &:active {
        outline: 2px solid var(--green);
        outline-offset: -3px;
      }

      &:hover,
      &.active {
        color: var(--white);
        background-color: var(--green);
      }
      @media (min-width: 767px) {
        font-size: 22px;
      }
    }
  }
  /* desktop */
  @media (min-width: 1024px) {
    ul {
      opacity: 1;
      position: relative;
      flex-direction: row;
      height: unset;
      background-color: unset;
      pointer-events: all;
      padding-top: 0;

      a {
        color: var(--white);
        font-size: 16px;
        line-height: 1;
        position: relative;
        margin: 0 16px;
        pointer-events: all;
        flex: unset;

        &:first-of-type {
          margin: 0 16px 0 0;
        }

        &:last-of-type {
          margin: 0 0 0 16px;
        }

        &:focus-visible,
        &:active {
          outline: 2px solid var(--white);
          outline-offset: -1px;
        }

        &:hover,
        &.active {
          color: var(--white);
          background-color: unset;
          &:after {
            transform: scaleX(1);
          }
        }
      }

      button {
        padding: 0.8em 1.5em;
        margin-left: 40px;
      }

      ${({ navigation }) =>
        navigation &&
        css`
          button {
            background-color: red;
          }
        `}
    }
    > button {
      display: none;
    }
    @media (min-width: 1144px) {
      ul {
        a {
          margin: 0 22px;

          &:first-of-type {
            margin: 0 22px 0 0;
          }

          &:last-of-type {
            margin: 0 0 0 22px;
          }
        }
        button {
          margin-left: 56px;
        }
      }
    }
  }
`

const Navigation = ({
  isnavigationopened,
  setIsNavigationOpened,
  closeNavigation,
}) => {
  const { setModalOpened } = useContext(ModalContext)
  const width = useWindowSize()
  return (
    <NavigationStyles navOpened={isnavigationopened}>
      <ExitButton
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavigationOpened(!isnavigationopened)}
        navOpened={isnavigationopened}
      />
      <ul className={isnavigationopened ? "show" : undefined}>
        <Link onClick={closeNavigation} activeClassName="active" to="/">
          <li>Home</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/classes">
          <li>Classes</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/about">
          <li>About</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/blog">
          <li>Blog</li>
        </Link>
        <Button
          color="black"
          navigation={width < 1024 ? true : false}
          flex={width < 1024 && "1 1 100%"}
          width="190px"
          onClick={() => {
            closeNavigation()
            setModalOpened(true)
          }}
        >
          View classes
        </Button>
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
