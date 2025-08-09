// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
//import { get } from "http";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQrW3asBekueApqrmFoKiMiuRXlGrYPZg",
  authDomain: "ak-notenest.firebaseapp.com",
  projectId: "ak-notenest",
  storageBucket: "ak-notenest.firebasestorage.app",
  messagingSenderId: "550000876909",
  appId: "1:550000876909:web:fe4db6829cd36446a44e64"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db=getFirestore(app);

export { db };