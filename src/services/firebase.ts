import firebase from "firebase/app";

import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
  apiKey: "AIzaSyD3FMdgvaSElwuuVOrrOvkdOS2M_wPUxTo",
  authDomain: "letmeaks.firebaseapp.com",
  databaseURL: "https://letmeaks-default-rtdb.firebaseio.com",
  projectId: "letmeaks",
  storageBucket: "letmeaks.appspot.com",
  messagingSenderId: "640983679638",
  appId: "1:640983679638:web:c6213a0703b8d4744db8b7"
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const database = firebase.database();

export { firebase, auth, database };