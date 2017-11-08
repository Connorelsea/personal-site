import glamorous from "glamorous"

export default ({ children }) => <Container>{children}</Container>

const Container = glamorous.div({
  margin: 50,
})
