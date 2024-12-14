import { useEffect, useState } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebaseConfig.js";
import showToast from "./toast.js";

export function signOut() {
  try {
    auth.signOut();
  } catch (error) {
    showToast("Unexpected Error occured while Signing Out", "ERROR");
    console.error(error);
  }
}

export function useUserSession(InitSession) {
  const [userUid, setUserUid] = useState(InitSession);
  const [fetchingUser, setFetchingUser] = useState(true);

  // Listen for changes to the user session
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (authUser) => {
      if (authUser) {
        setUserUid(authUser.uid);
      } else {
        setUserUid(null);
      }
      setFetchingUser(false);
    });

    return () => unsubscribe();
  }, []);

  return [userUid, fetchingUser];
}
