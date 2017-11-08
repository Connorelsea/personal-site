import React from "react"
import glamorous from "glamorous"
import { css } from "glamor"

export default ({ children, ...props }) =>
  children
    ? React.Children.map(
        children,
        (child, index) =>
          child &&
          React.cloneElement(child, {
            style: {
              ...child.props.style,
              ...animatorStyle(
                index,
                props.animationDuration,
                props.animationDelayOffset,
                props.animation
              ),
            },
          })
      )
    : ""

const animatorStyle = (
  index,
  animationDuration = 1,
  animationDelayOffset = 0.1,
  animation = defaultAnimation
) => ({
  animation: `${animation} ${animationDuration}s`,
  animationDelay: `${index * animationDelayOffset}s`,
  animationFillMode: "forwards",
  opacity: 0,
})

const defaultAnimation = css.keyframes("fadeIn", {
  from: { opacity: 0, transform: "translateY(-10px)" },
  to: { opacity: 1, transform: "translateY(0)" },
})
