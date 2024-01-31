// firebase.js

import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyCyO-noK2ex3PxxGWFnjwIsUgGF9gOe_fI",
  authDomain: "elixir-brand.firebaseapp.com",
  projectId: "elixir-brand",
  storageBucket: "elixir-brand.appspot.com",
  messagingSenderId: "459387377291",
  appId: "1:459387377291:web:3f7434a792a2176f93668e"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export default app

export { db };

export const imageDb = getStorage(app)