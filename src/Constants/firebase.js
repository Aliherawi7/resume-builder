// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDTr2uAo6afeAB6gWhawjSDarQCXQVRUW4",
    authDomain: "resume-builder-atomcode.firebaseapp.com",
    projectId: "resume-builder-atomcode",
    storageBucket: "resume-builder-atomcode.firebasestorage.app",
    messagingSenderId: "290245512972",
    appId: "1:290245512972:web:2eb45843570d3d75bec329",
    measurementId: "G-DBBMLY40Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);