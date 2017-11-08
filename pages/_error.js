import React from "react"
import Link from "next/link"
import glamorous from "glamorous"

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  renderErrorText() {
    const { statusCode } = this.props

    if (statusCode && statusCode === 404) {
      return "That page doesn't exist!"
    } else if (statusCode) {
      return `An error ${statusCode} occurred on server`
    } else {
      return "An error occurred on client"
    }
  }

  render() {
    return (
      <Container>
        <h1>{this.props.statusCode}</h1>

        <ErrorText>{this.renderErrorText()}</ErrorText>

        <Link href="/">
          <A>Return to index?</A>
        </Link>
      </Container>
    )
  }
}

const Container = glamorous.div({
  width: "50%",
  margin: "15% auto",
  textAlign: "center",
})

const ErrorText = glamorous.p({
  color: "slategray",
})

const A = glamorous.a({
  color: "blue",
  textDecoration: "none",
  cursor: "pointer",
})
