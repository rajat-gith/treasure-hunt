import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAmFCgry2Nv3-6CBurpjPfa6GiCCcLGrtI",
  authDomain: "treasure-hunt-6f0c8.firebaseapp.com",
  projectId: "treasure-hunt-6f0c8",
  storageBucket: "treasure-hunt-6f0c8.appspot.com",
  messagingSenderId: "336680522955",
  appId: "1:336680522955:web:a1ca38ffda26ff6d2cf74e",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const provider = new GoogleAuthProvider()
export {auth,provider}
