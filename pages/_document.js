import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <>
            <meta name="title" content="ACQIT" />
            <meta
              name="description"
              content="Transformamos tus problemas en soluciones"
            />
            <meta
              name="keywords"
              content="soluciones, tecnologia, soluciones tecnologicas"
            />
            <meta property="og:title" content="ACQIT" />
            <meta property="og:url" content="https://acqit.com.ar/" />
            <meta property="og:type" content="website" />
            <meta
              property="og:description"
              content="Transformamos tus problemas en soluciones."
            />
            <meta
              property="og:image"
              content="https://acqit.com.ar/images/icons/SVG/logo.svg"
            />
            <meta name="twitter:title" content="ACQIT" />
            <meta
              name="twitter:description"
              content="Transformamos tus problemas en soluciones."
            />
            <meta name="twitter:url" content="https://acqit.com.ar/" />
            <meta
              name="twitter:image"
              content="https://acqit.com.ar/images/icons/SVG/logo.svg"
            />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link
              rel="preconnect"
              href="https://fonts.gstatic.com"
              crossOrigin="true"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Montserrat:wght@100;300;400;700&display=swap"
              rel="stylesheet"
            />
            <link
              href="https://fonts.googleapis.com/css2?family=Be+Vietnam:wght@100;300;400;500;700&display=swap"
              rel="stylesheet"
            />
          </>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
