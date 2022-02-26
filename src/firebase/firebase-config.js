import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCxgOUWhZdx8rR2RZSFrzZhfxqecxsxnp8",
    authDomain: "react-crud-bodega.firebaseapp.com",
    projectId: "react-crud-bodega",
    storageBucket: "react-crud-bodega.appspot.com",
    messagingSenderId: "453481439433",
    appId: "1:453481439433:web:73e9122dd3b70ee7766d18"
};
  
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();


export {
    db,
    googleAuthProvider,
    firebase
}