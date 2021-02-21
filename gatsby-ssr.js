const React = require("react")
const Layout = require("./src/components/layout").default
const gsap = require("gsap").gsap

exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.onRenderBody = ({ setBodyAttributes }) => {
  setBodyAttributes({
    className: "no-js",
  })
}
