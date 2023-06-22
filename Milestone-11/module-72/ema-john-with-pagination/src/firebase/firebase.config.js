// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDVcek2e_XkgZwfbuXYEiqtMJjgPmuLT7w",
    authDomain: "ema-jhon-with-auth-dfbd7.firebaseapp.com",
    projectId: "ema-jhon-with-auth-dfbd7",
    storageBucket: "ema-jhon-with-auth-dfbd7.appspot.com",
    messagingSenderId: "541883925521",
    appId: "1:541883925521:web:4227ed8fd424e378f85db0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;