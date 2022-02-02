import react, { useState, useEffect } from "react";
import initialFirebase from "../firebase/firebase.init";
import {
  getAuth,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

// initialize firebae app
initialFirebase();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [authError, setAuthError] = useState("");
  const googleProvider = new GoogleAuthProvider();

  const auth = getAuth();
  // create user with email and password

  const registerUser = (email, password, name, location, history) => {
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        setAuthError("");
        const url = location?.state?.from || "/";
        const newUser = { email, display: name };

        setUser(newUser);
        // send name to firebase after createtion
        updateProfile(auth.currentUser, {
          displayName: name 
        })
          .then(() => { 
          })
          .catch((error) => { 
          });
        history.push(url);
      })
      .catch((error) => {
        const errorMessage = error.code;
        console.log(errorMessage);
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // user login

  const loginUser = (email, password, location, history) => {
    setIsLoading(true);
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const url = location?.state?.from || "/";
        history.push(url);
        setAuthError("");
      })
      .catch((error) => {
        setAuthError(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  // google login

  const googleLogin = (location, history) => {
    setIsLoading(true);
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const destiny = location?.state?.from || "/";
        history.push(destiny);
        setAuthError("");
      })
      .catch((error) => {
        const errorMessage = error.message;
        setAuthError(errorMessage);
      })
      .finally(() => setIsLoading(false));
  };

  // logout user
  const logOut = () => {
    setIsLoading(true);
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        // An error happened.
      })
      .finally(() => setIsLoading(false));
  };

  // user observer
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);
      } else {
        setUser({});
      }
      setIsLoading(false);
    });
    return () => unsubscribe;
  }, [auth]);

  return {
    user,
    isLoading,
    setUser,
    registerUser,
    logOut,
    loginUser,
    authError,
    googleLogin,
  };
};

export default useFirebase;
