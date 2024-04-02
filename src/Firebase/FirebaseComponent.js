import firebase from 'firebase/auth'


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDjEBicHY-MCp2Hnf45Fjm3Br5FAWZzisk",
    authDomain: "facebook-clone-d0a92.firebaseapp.com",
    projectId: "facebook-clone-d0a92",
    storageBucket: "facebook-clone-d0a92.appspot.com",
    messagingSenderId: "922233738069",
    appId: "1:922233738069:web:29697265106d54f7fbd5dc",
    measurementId: "G-WRR7Y72XG1"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db= firebaseApp.firestore()
  const auth = firebase.auth()
  const provider= firebase.auth.GoogleAuthProvider()

  export{auth,provider}
  export default db