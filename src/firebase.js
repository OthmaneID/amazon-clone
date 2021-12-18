import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCqjUK7gnUe82agXIaMXz6avMPp7aDqi3o",
    authDomain: "clone-2a083.firebaseapp.com",
    projectId: "clone-2a083",
    storageBucket: "clone-2a083.appspot.com",
    messagingSenderId: "724200234901",
    appId: "1:724200234901:web:ce9d6e8818dbe0a5a0609c",
    measurementId: "G-9SG8ZSJTH8"
};


export const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore()
const auth = firebase.auth();

export { db, auth };