// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCtHXxIipBmU9DrFwcTvHBIYglljtDuSg8",
  authDomain: "reclair-s-website.firebaseapp.com",
  projectId: "reclair-s-website",
  storageBucket: "reclair-s-website.appspot.com",
  messagingSenderId: "847696439381",
  appId: "1:847696439381:web:99e13ab835f4b8086a0cdc",
  measurementId: "G-9FFXER8XSR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app 