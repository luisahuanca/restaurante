
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyBGpSywy30zl8pp_Uu6lnIoR-cdxYdj68k",
  authDomain: "reservas-c5492.firebaseapp.com",
  projectId: "reservas-c5492",
  storageBucket: "reservas-c5492.appspot.com",
  messagingSenderId: "1057460528333",
  appId: "1:1057460528333:web:6a9f1bb1fc1a8d5de9f584"
};

const app = initializeApp(firebaseConfig);
export const dbConfig = getFirestore(app);