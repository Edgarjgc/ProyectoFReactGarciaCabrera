import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAAatd04L_5SvKAP06RucQ6Pn00x0Aj7IE",
  authDomain: "gg-auto-detailing.firebaseapp.com",
  projectId: "gg-auto-detailing",
  storageBucket: "gg-auto-detailing.appspot.com",
  messagingSenderId: "526420322347",
  appId: "1:526420322347:web:33b6d05fdb3bd07c65226e",
  measurementId: "G-J8GN5XWCQV",
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
