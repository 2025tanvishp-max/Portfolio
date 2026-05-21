import { useEffect, useState } from "react"
import "../styles/cursor.css"

function Cursor() {

  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  })

  const [hovering, setHovering] = useState(false)

  useEffect(() => {

    const moveCursor = (e) => {

      setPosition({
        x: e.clientX,
        y: e.clientY,
      })

    }

    const targets = document.querySelectorAll(
      "a, button, .project-item"
    )

    const handleEnter = () => {
      setHovering(true)
    }

    const handleLeave = () => {
      setHovering(false)
    }

    targets.forEach((target) => {

      target.addEventListener("mouseenter", handleEnter)
      target.addEventListener("mouseleave", handleLeave)

    })

    window.addEventListener("mousemove", moveCursor)

    return () => {

      window.removeEventListener("mousemove", moveCursor)

      targets.forEach((target) => {

        target.removeEventListener("mouseenter", handleEnter)
        target.removeEventListener("mouseleave", handleLeave)

      })

    }

  }, [])

  return (
    <div
      className={`cursor ${hovering ? "hovered" : ""}`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  )
}

export default Cursor