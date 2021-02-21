const React = require("react")
const Layout = require("./src/components/layout").default
const gsap = require("gsap").gsap

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onClientEntry = () => {
  window.addEventListener("load", () => {
    const body = document.querySelector("body")
    body.className = document.body.className.replace(/\bno-js\b/, "")
    gsap.from(body, { opacity: 0, duration: 1, ease: "Power3.easeInOut" })
  })
}
