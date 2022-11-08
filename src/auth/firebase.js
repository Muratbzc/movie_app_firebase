import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
// import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTHDOMAIN,
  projectId: process.env.REACT_APP_PROJECTID,
  storageBucket: process.env.REACT_APP_STORAGEBUCKET,
  messagingSenderId: process.env.REACT_APP_MESSANING_SENDER_ID,
  appId: process.env.REACT_APP_ID,
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

//!---REGISTER NEW USER

export const register = (email, password, navigate) => {
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

//!---SING_IN EXISTING USER

export const login = (email, password, navigate) => {
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      console.log(user);
      navigate("/");
    })
    .catch((error) => {
      console.log(error);
      toast.error(error.message);
    });
};

//!---SING_IN WITH_GOOGLE

const provider = new GoogleAuthProvider();

export const singWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      // The signed-in user info.
      const user = result.user;
      console.log(user);
    })
    .catch((error) => {
      // Handle Errors here.
      console.log(error);
    });
};

//!---USER OBSERVER ??

export const userObserver = () => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      console.log(user);
      console.log("sing in");
    } else {
      console.log("user signed out");
    }
  });
};

//!---USER LOGOUT
export const logOut = () => {
  signOut(auth);
};
