import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'
import 'firebase/storage'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyCAkUDGLGGI6LGRxHNd8Xoxd6cJglI8g1Q",
    authDomain: "whatsapp-firebase-728b6.firebaseapp.com",
    projectId: "whatsapp-firebase-728b6",
    storageBucket: "whatsapp-firebase-728b6.appspot.com",
    messagingSenderId: "698978251146",
    appId: "1:698978251146:web:f763587c3e31f063821873"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)
  const db = firebaseApp.firestore()
  const auth = firebase.auth()
  const provider = new firebase.auth.GoogleAuthProvider()

  export { auth, provider}
  export default db