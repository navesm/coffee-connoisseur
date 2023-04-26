import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="preload"
        href="/fonts/InstrumentSerif-Regular.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        href="/fonts/InstrumentSerif-italic.ttf"
        as="font"
        crossOrigin="anonymous"
      />
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
