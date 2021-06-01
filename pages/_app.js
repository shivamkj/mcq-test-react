import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/animation.css";
import "../node_modules/react-toastify/dist/ReactToastify.min.css";

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
