import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyA9NYIwfQwVGaRZyTf0Wi3VNl3HR_aGLHQ",
    authDomain: "line-clone-5292b.firebaseapp.com",
    projectId: "line-clone-5292b",
    storageBucket: "line-clone-5292b.appspot.com",
    messagingSenderId: "86545930730",
    appId: "1:86545930730:web:9ea6c7395e04f34ab3ba93"
});

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };