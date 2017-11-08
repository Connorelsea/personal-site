import Link from "next/link"
import { withRouter } from "next/router"
import BlanketAnimation from "./blanket-animation"
import glamorous from "glamorous"
import style from "../util/style"

export default () => (
  <Container>
    <BlanketAnimation>
      <ActiveLink href="/">projects</ActiveLink>
      <ActiveLink href="/pics">pics</ActiveLink>
    </BlanketAnimation>
  </Container>
)

let ActiveLink = ({ children, router, href, ...props }) => (
  <Link href={href}>
    <StyledLink active={router.pathname === href} style={props.style}>
      {children}
    </StyledLink>
  </Link>
)

ActiveLink = withRouter(ActiveLink)

const Container = glamorous.div({
  display: "inline-flex",
  flexDirection: "column",
  [style.breakpoint.small]: {
    flexDirection: "row",
    marginBottom: 35,
  },
})

const StyledLink = glamorous.a(({ active }) => ({
  color: active ? style.color.starDust : style.color.heather,
  fontSize: "2rem",
  marginBottom: 35,
  "&:hover": {
    cursor: "pointer",
  },
  [style.breakpoint.small]: {
    marginBottom: 0,
    marginRight: 25,
  },
}))
