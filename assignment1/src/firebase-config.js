import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBiSPjshQNIs4jPuUZMY2DaoYuVVfjJe8c",
    authDomain: "sign-in-5fbab.firebaseapp.com",
    projectId: "sign-in-5fbab",
    storageBucket: "sign-in-5fbab.appspot.com",
    messagingSenderId: "413999267411",
    appId: "1:413999267411:web:f9df78d163a9f26869d0a6"
  };
  const app = initializeApp(firebaseConfig);

  export const auth = getAuth();