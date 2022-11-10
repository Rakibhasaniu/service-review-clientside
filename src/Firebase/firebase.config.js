// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId,
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBLWWWm5agZRLe4jN2wNfrXs22OFvE-xEI",
//   authDomain: "door-c9ebe.firebaseapp.com",
//   projectId: "door-c9ebe",
//   storageBucket: "door-c9ebe.appspot.com",
//   messagingSenderId: "366038055346",
//   appId: "1:366038055346:web:9a63251b85a6c758d64cab"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;