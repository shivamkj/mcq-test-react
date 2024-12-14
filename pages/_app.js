import "../styles/tailwind.css";
import "../styles/globals.css";
import "../styles/animation.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useUserSession } from "../utils/auth.js";
import Loader from "../components/Loader.js";
import { useEffect, useState } from "react";
import { encodeParams, parseQueryParam } from "../utils/helper.js";

function MyApp({ Component, pageProps }) {
  const [userUid, fetchingUser] = useUserSession();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (fetchingUser == true) return;

    const testId = parseQueryParam("id");
    const pathname = window.location.pathname;

    // Changes to login page, if logged out and not on login page
    if (userUid == null && pathname != "/login") {
      window.location.replace("/login" + "?" + encodeParams({ path: pathname, id: testId }));
    }
    // If already logged in and still on login page
    else if (userUid != null && pathname == "/login") {
      const path = parseQueryParam("path") ?? "/mcq-test";
      window.location.replace(path + "?" + encodeParams({ id: testId }));
    }
    setLoading(false);
  }, [userUid]);

  if (isLoading == true) return <Loader message="LOADING" />;

  return (
    <>
      <Component {...pageProps} />
      <ToastContainer />
    </>
  );
}

export default MyApp;
