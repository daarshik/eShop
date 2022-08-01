// import firebase from "firebase";

// const firebaseConfig = {
//   apiKey: "AIzaSyBXE639OKGBuRE7hV9OoETS7BSwN1_3-Hc",
//   authDomain: "eshop-60d9f.firebaseapp.com",
//   projectId: "eshop-60d9f",
//   storageBucket: "eshop-60d9f.appspot.com",
//   messagingSenderId: "788757139787",
//   appId: "1:788757139787:web:d60f929a65a66cf58758ce",
//   measurementId: "G-5EYBNHP3CP",
// };
// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();

// const auth = firebase.auth();

// //export { firebase, auth, db };

// export { db, auth };

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAXFme_oTPlrFmWIm707ac6Z2qawoTvf2k",
  authDomain: "authentication-tutorial-ec556.firebaseapp.com",
  projectId: "authentication-tutorial-ec556",
  storageBucket: "authentication-tutorial-ec556.appspot.com",
  messagingSenderId: "945663559539",
  appId: "1:945663559539:web:51b9786fd75d399bf86706",
  measurementId: "G-22FP5PHT1F",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);
export { db, auth };
