import React from "react"
import styled, { css } from "styled-components"
import { Link } from "gatsby"
import { motion } from "framer-motion"

const NavigationStyles = styled.nav`
  z-index: 2;
  button {
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
  }

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
    padding-top: 40px;
    z-index: 2;

    &.show {
      pointer-events: all;
      opacity: 1;
    }

    a {
      font-size: 18px;
      font-family: "DM Sans";
      color: var(--green);
      font-weight: 600;
      padding: 26px 12px;
      width: 100%;
      text-align: center;
      letter-spacing: 1px;
      transition: background-color 0.15s ease;
      position: relative;

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
        margin: 0 12px;

        &:first-of-type {
          margin: 0 12px 0 0;
        }

        &:last-of-type {
          margin: 0 0 0 12px;
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
    }
    button {
      display: none;
    }
  }
`

const Navigation = ({
  isNavigationOpened,
  setIsNavigationOpened,
  closeNavigation,
}) => {
  return (
    <NavigationStyles navOpened={isNavigationOpened}>
      <motion.button
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        onClick={() => setIsNavigationOpened(!isNavigationOpened)}
      />
      <ul className={isNavigationOpened && "show"}>
        <Link onClick={closeNavigation} activeClassName="active" to="/about">
          <li>About</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/careers">
          <li>Careers</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/events">
          <li>Events</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/products">
          <li>Products</li>
        </Link>
        <Link onClick={closeNavigation} activeClassName="active" to="/support">
          <li>Support</li>
        </Link>
      </ul>
    </NavigationStyles>
  )
}

export default Navigation
