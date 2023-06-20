import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
const firebaseConfig = {
  apiKey: 'AIzaSyAwF0aaq5OOvla78qVAASIvlTUhigxdq34',
  authDomain: 'music-14ae5.firebaseapp.com',
  projectId: 'music-14ae5',
  storageBucket: 'music-14ae5.appspot.com',
  // messagingSenderId: "649010017821",
  appId: '1:649010017821:web:61781cd36992e968ec38f4'
}
//initialize firebase
// export default firebase.initializeApp(firebaseConfig)
firebase.initializeApp(firebaseConfig)
const auth = firebase.auth()
const db = firebase.firestore()

//collections
const userCollection = db.collection('users')
export { auth, db, userCollection }
