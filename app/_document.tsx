import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en" data-gramm="false" data-gramm_editor="false" data-enable-grammarly="false">
      <Head>
        <meta name="grammarly-disable" content="true" />
        {/* Force-load the Expedia script in the head */}
        <script
          className="eg-widgets-script"
          src="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.js"
          async
        ></script>
        <link 
          rel="stylesheet" 
          href="https://affiliates.expediagroup.com/products/widgets/assets/eg-widgets.css"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
} 