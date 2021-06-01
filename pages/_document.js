import Document, { Html, Head, Main, NextScript } from "next/document";
import { ToastContainer } from "react-toastify";

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap"
            rel="stylesheet"
          />
        </Head>
        <body>
          <Main />
          <div id="modal"></div>
          <div id="toast"></div>
          <ToastContainer />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
