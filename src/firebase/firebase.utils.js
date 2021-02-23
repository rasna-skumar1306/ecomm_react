import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: 'AIzaSyDs3x-92JewNkO_AoBe2_Hq7cSuhnIs1A0',
  authDomain: 'todoist-react-94e0e.firebaseapp.com',
  databaseURL: 'https://todoist-react-94e0e.firebaseio.com',
  projectId: 'todoist-react-94e0e',
  storageBucket: 'todoist-react-94e0e.appspot.com',
  messagingSenderId: '28852019850',
  appId: '1:28852019850:web:f4a50c5cc857e85fcd4373',
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({ prompt: 'select_account' })
export const SignInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
