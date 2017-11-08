import Link from "next/link"
import { withRouter } from "next/router"
import BlanketAnimation from "./blanket-animation"
import glamorous from "glamorous"
import { css } from "glamor"
import style from "../util/style"

export default () => (
  <Container>
    <BlanketAnimation animationDelay={0.3}>
      <li>
        <ActiveLink href="/">projects</ActiveLink>
      </li>
      <li>
        <ActiveLink href="/pics">pics</ActiveLink>
      </li>
    </BlanketAnimation>
  </Container>
)

let ActiveLink = ({ children, router, href, ...props }) => (
  <Link href={href}>
    <StyledLink
      active={router.pathname === href}
      style={props.style}
      href={href}
    >
      {children}
    </StyledLink>
  </Link>
)

ActiveLink = withRouter(ActiveLink)

const Container = glamorous.ul({
  listStyle: "none",
  paddingLeft: 0,
  [style.breakpoint.small]: {
    flexDirection: "row",
    marginBottom: 35,
  },
})

const StyledLink = glamorous.a(({ active }) => ({
  display: "inline-block",
  color: active ? style.color.stormGray : style.color.heather,
  fontSize: "2rem",
  marginBottom: 35,
  border: "1px solid transparent",
  padding: "2px 0",
  borderRadius: 5,
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
  },
  [style.breakpoint.small]: {
    marginBottom: 0,
    marginRight: 25,
  },
}))
