// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAZ-WwrEgEy2CvzA_sEgJCOaB65NygeVhk",
    authDomain: "streamify-eb7bf.firebaseapp.com",
    projectId: "streamify-eb7bf",
    storageBucket: "streamify-eb7bf.appspot.com",
    messagingSenderId: "736524230575",
    appId: "1:736524230575:web:aa68be6aef03b0259b195a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;