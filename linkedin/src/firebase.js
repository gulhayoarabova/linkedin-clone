// import firebase from "firebase";
import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth,GoogleAuthProvider,signInWithPopup } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDbO5zR5vwd_walyKhnL9ENO0D0_xWFMr0",
  authDomain: "linkedin-clone-8d9a8.firebaseapp.com",
  projectId: "linkedin-clone-8d9a8",
  storageBucket: "linkedin-clone-8d9a8.appspot.com",
  messagingSenderId: "1098087473597",
  appId: "1:1098087473597:web:4c415a9498c498b2a432d4",
};

const app = initializeApp(firebaseConfig)
// const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);
export default app;
export { auth, provider, storage, db,signInWithPopup  };
