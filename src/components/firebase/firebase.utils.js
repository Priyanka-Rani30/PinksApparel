import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const config= {
    apiKey: "AIzaSyCwmoAQyF0Nwyk17OFYANO2Ghyu-OOkHQA",
    authDomain: "crown-db-bc04b.firebaseapp.com",
    projectId: "crown-db-bc04b",
    storageBucket: "crown-db-bc04b.appspot.com",
    messagingSenderId: "337302715082",
    appId: "1:337302715082:web:331185bacec4fc09299233",
    measurementId: "G-J2TW33CKNE"
  };

  firebase.initializeApp(config);

  export const auth=firebase.auth();
  export const firestore=firebase.firestore();

  //Google authentication part
  const provider= new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({'prompt':'select_account'});
  export const signInWithGoogle=()=>{auth.signInWithPopup(provider)};
  export default firebase;