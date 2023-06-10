import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Heebo:wght@300;400;500;700&family=Nunito:wght@200;300;400;600;700;800;900&family=Playfair+Display+SC:wght@700&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
