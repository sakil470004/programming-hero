// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCPMm8Uq454W2sbJrXvY-xxN-uWtUX0rmE",
    authDomain: "fir-auth-contaxt-tail.firebaseapp.com",
    projectId: "fir-auth-contaxt-tail",
    storageBucket: "fir-auth-contaxt-tail.appspot.com",
    messagingSenderId: "645914295623",
    appId: "1:645914295623:web:a0fa9a4f4a91d619aa6062"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;