import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta name="description" content="Fishing Game" />
        <meta name="keywords" content="fishing, fishing game, fish" />
        <meta name="author" content="ahu14" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <body style={{overflow: "hidden"}}>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
