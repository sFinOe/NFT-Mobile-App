// Import the functions you need from the SDKs you need

import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBvI9wvbkRNDW2sAXhyAJCbkAlcywlQuHk",
  authDomain: "firstproject-8e977.firebaseapp.com",
  projectId: "firstproject-8e977",
  storageBucket: "firstproject-8e977.appspot.com",
  messagingSenderId: "511135494325",
  appId: "1:511135494325:web:c1cfcf0a7ddaa9e74c0efc"
};

// Initialize Firebase

let app;
if  (firebase.apps.length === 0) {
	app = firebase.initializeApp(firebaseConfig);
}
else {
	app = firebase.app();
}

const auth = firebase.auth();
export { auth };