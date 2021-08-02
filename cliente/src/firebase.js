import firebase from 'firebase/app';
import 'firebase/firestore';

const fbConfig = {
  apiKey: "AIzaSyAKmou8IwSEfVTf49poXQ-l8CoAxSFOgPs",
  authDomain: "gestion-ausencias.firebaseapp.com",
  projectId: "gestion-ausencias",
  storageBucket: "gestion-ausencias.appspot.com",
  messagingSenderId: "848188775112",
  appId: "1:848188775112:web:41f807252c30063dbb23fd"
}

firebase.initializeApp(fbConfig);
const firestore = firebase.firestore();

export {
firebase,
firestore
}