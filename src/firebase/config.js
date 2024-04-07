import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyAhx92i6AtldYLqIw3ZoolgNRiwjgMns-M",
    authDomain: "u-passwords.firebaseapp.com",
    projectId: "u-passwords",
    storageBucket: "u-passwords.appspot.com",
    messagingSenderId: "440325000947",
    appId: "1:440325000947:web:b20d3d2591bb343dae3186"
  };

  firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, timestamp }