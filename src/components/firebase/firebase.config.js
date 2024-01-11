// import { initializeApp } from "firebase/app";

// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
//   authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
//   appId: import.meta.env.VITE_FIREBASE_APP_ID
// };

// // Initialize Firebase
// export const app = initializeApp(firebaseConfig);




// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDznLHtmvOymrsjFJ6-0YGw4pa3JnWN3WQ",
  authDomain: "ts-blood-donations.firebaseapp.com",
  projectId: "ts-blood-donations",
  storageBucket: "ts-blood-donations.appspot.com",
  messagingSenderId: "609418158090",
  appId: "1:609418158090:web:8e19d15f98272a2e423ff3"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);