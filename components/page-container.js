import glamorous from "glamorous"
import style from "../util/style"

export default glamorous.div({
  display: "flex",
  margin: 50,
  [style.breakpoint.small]: {
    margin: 25,
    flexDirection: "column",
  },
})

export const Left = glamorous.div({
  display: "flex",
  position: "fixed",
  flexDirection: "column",
  width: "30%",
  [style.breakpoint.small]: {
    width: "100%",
    flexDirection: "column-reverse",
    position: "initial",
  },
})

export const Right = glamorous.div({
  display: "flex",
  flexDirection: "column",
  position: "relative",
  width: "60%",
  paddingLeft: 50,
  left: "35%",
  [style.breakpoint.small]: {
    width: "100%",
    paddingLeft: 0,
    left: 0,
  },
})
