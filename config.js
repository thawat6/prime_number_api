const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyDtr169uOm0QFRNkN1mZnw0IZDtSPrMLKY",
  authDomain: "prime-number-a9e06.firebaseapp.com",
  projectId: "prime-number-a9e06",
  storageBucket: "prime-number-a9e06.appspot.com",
  messagingSenderId: "838325857418",
  appId: "1:838325857418:web:45f5b5c9cf7fd09523d173",
  measurementId: "G-YK3DBVMSBC",
};
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const Calculate = db.collection("Calculates");
module.exports = Calculate;
