import glamorous from "glamorous"
import style from "../util/style"

export default glamorous.div({
  margin: 50,
  [style.breakpoint.small]: {
    margin: 25,
  },
})

export const Left = glamorous.div({
  display: "flex",
  flexDirection: "column",
  width: "50%",
  paddingRight: 50,
  [style.breakpoint.small]: {
    width: "100%",
    flexDirection: "column-reverse",
  },
})
