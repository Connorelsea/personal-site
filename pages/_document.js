import Document, { Head, Main, NextScript } from "next/document"
import { renderStatic } from "glamor/server"

export default class MyDocument extends Document {
  static async getInitialProps({ renderPage }) {
    const page = renderPage()
    const styles = renderStatic(() => page.html)

    return { ...page, ...styles }
  }

  constructor(props) {
    super(props)
    const { __NEXT_DATA__, ids } = props

    if (ids) {
      __NEXT_DATA__.ids = this.props.ids
    }
  }

  render() {
    return (
      <html>
        <Head>
          <meta charset="utf-8" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <title>Cody Wall</title>
          <link href="static/san-francisco.css" rel="stylesheet" />
          <style>
            {`
              body {
                margin: 0;
                font-family: San Francisco;
                background-color: #F8F8F8;
              }
            `}
          </style>
          <style dangerouslySetInnerHTML={{ __html: this.props.css }} />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
