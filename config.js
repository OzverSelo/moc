 import { initializeApp } from 'firebase/app';
 import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
// import 'firebase/firestore' 
//import firebase from 'firebase'
 
const firebaseConfig = {
  apiKey: "AIzaSyCoGkB_CVMbV54X6RhYFIYNV4aTN4ibAO4",
  authDomain: "testlogin-ac1ea.firebaseapp.com",
  databaseURL: "https://testlogin-ac1ea.firebaseio.com",
  projectId: "testlogin-ac1ea",
  storageBucket: "testlogin-ac1ea.appspot.com",
  messagingSenderId: "677527993495",
  appId: "1:677527993495:web:6bd7efc907f8593c71bdd2",
  measurementId: "G-31W3YQZSWB"
};
const app=initializeApp(firebaseConfig)
const db = getFirestore(app);
export {db}

 
//  export const fauth=f.auth()
//  export const db = f.firestore();
 
// let Firebase;
// let auth;
// if (firebase.apps.length === 0) {
//   Firebase = firebase.initializeApp(firebaseConfig);
//   auth=firebase.auth()
// }

// export {Firebase,auth}
 