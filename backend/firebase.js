const firebase = require('firebase');
require('firebase/firestore');
const {firebaseConfig} = require('./firebaseConfig.js');

//console.log(firebaseConfig)
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

module.exports = {firebase, auth, db};


