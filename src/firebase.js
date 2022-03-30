import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseApp=firebase.initializeApp({
    apiKey: "AIzaSyARXXsYsamyOVCjdDpLs-U1RDHZNmWnmP4",
    authDomain: "chat-appli-ed3d5.firebaseapp.com",
    projectId: "chat-appli-ed3d5",
    storageBucket: "chat-appli-ed3d5.appspot.com",
    messagingSenderId: "363012339533",
    appId: "1:363012339533:web:59f9e02f40029b5edde904",
    measurementId: "G-3368KM59L4"
})

const db=firebase.firestore();

const auth=firebase.auth();

export {db,auth}
