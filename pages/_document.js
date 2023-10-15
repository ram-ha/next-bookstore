import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <style>
        @import
        url('https://fonts.googleapis.com/css2?family=Cormorant+Infant:wght@300;600&display=swap');
      </style>

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
