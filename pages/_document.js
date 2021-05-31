
import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <script async defer 
            data-website-id="6af95a0c-0756-43f8-8a73-fb9eefe3bffb" 
            src="https://umami.jessechen.net/umami.js"
            data-domains="www.jessechen.net">
          </script>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument