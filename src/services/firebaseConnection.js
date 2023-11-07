import firebase from "firebase";
import 'firebase/database';
import 'firebase/auth';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCdKrKrMLsqsrRDsvfr5Mq29AH_JMtKWso",
  authDomain: "appbd-5ad35.firebaseapp.com",
  databaseURL: "https://appbd-5ad35-default-rtdb.firebaseio.com",
  projectId: "appbd-5ad35",
  storageBucket: "appbd-5ad35.appspot.com",
  messagingSenderId: "583739178089",
  appId: "1:583739178089:web:751d43ba2c65d1c3d276f8",
  measurementId: "G-4J0PNCMJZ4"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}

export default firebase;