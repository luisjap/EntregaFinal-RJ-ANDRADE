import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBYfMey6KVbXJd37FisvbwByt-tJ34-0ZU",
  authDomain: "pfirebase1-70236.firebaseapp.com",
  projectId: "pfirebase1-70236",
  storageBucket: "pfirebase1-70236.appspot.com",
  messagingSenderId: "277435017320",
  appId: "1:277435017320:web:6d56c4217c2138cd5833dd"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);