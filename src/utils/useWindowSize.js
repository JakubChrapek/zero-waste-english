import { useState, useEffect } from "react"

const getWidth = () =>
  (typeof window !== "undefined" && window.innerWidth) ||
  (typeof window !== "undefined" &&
    document.documentElement &&
    document.documentElement.clientWidth) ||
  (typeof document !== "undefined" &&
    document.body &&
    document.body.clientWidth)

export default function useWindowSize() {
  const [width, setWidth] = useState(getWidth())

  useEffect(() => {
    let timeoutId = null
    const resizeListener = () => {
      clearTimeout(timeoutId)
      timeoutId = setTimeout(() => setWidth(getWidth()), 150)
    }
    window.addEventListener("resize", resizeListener)
    return () => {
      window.removeEventListener("resize", resizeListener)
    }
  }, [])
  return width
}
