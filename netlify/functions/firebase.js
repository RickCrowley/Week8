const firebase = require("firebase/app")
require("firebase/firestore")

const firebaseConfig = {
  apiKey: "AIzaSyB_gWlqXnj2x9AZ7sMgLdBpYjs0YlKg5HU",
  authDomain: "kiei-451-b4e4b.firebaseapp.com",
  projectId: "kiei-451-b4e4b",
  storageBucket: "kiei-451-b4e4b.appspot.com",
  messagingSenderId: "519361549325",
  appId: "1:519361549325:web:d650889fef3f49e1e0b144"
} // replace

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

module.exports = firebase