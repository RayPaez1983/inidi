// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCHljNivPE9FcH0NM4nGMVu_ZsxxwOH2D0",
  authDomain: "indipijamas.firebaseapp.com",
  projectId: "indipijamas",
  storageBucket: "indipijamas.appspot.com",
  messagingSenderId: "463442057391",
  appId: "1:463442057391:web:ee71a405fa140722359c5a",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const googleProvider = new GoogleAuthProvider();
googleProvider.getCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const singInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const singInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);
export const db = getFirestore();

export const createUserDocumentAuth = async (userAuth, additionalInfo = {}) => {
  if (!userAuth) return;
  const useDocRef = doc(db, "users", userAuth.uid);
  const userSnapShot = await getDoc(useDocRef);
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createAt = new Date();
    try {
      await setDoc(useDocRef, {
        displayName,
        email,
        createAt,
        ...additionalInfo,
      });
    } catch (error) {
      console.log("error", error.message);
    }
  }
  return useDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};
