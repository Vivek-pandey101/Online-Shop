import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCyCoLlZN-DO7swW7c2rtgS9D1ZG_m3goQ",
  authDomain: "online-shop-3cfd7.firebaseapp.com",
  projectId: "online-shop-3cfd7",
  storageBucket: "online-shop-3cfd7.firebasestorage.app",
  messagingSenderId: "452037225537",
  appId: "1:452037225537:web:9d8d66b168094d72dbeac0",
};

const app = initializeApp(firebaseConfig);

const fireDataBase = getFirestore(app);
const auth = getAuth(app);

export { fireDataBase, auth };
