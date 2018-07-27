import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyB4wmjRet5qvfbg-EAeAYmdPOJsir9DI1c",
    authDomain: "data-nc.firebaseapp.com",
    databaseURL: "https://data-nc.firebaseio.com",
    projectId: "data-nc",
    storageBucket: "data-nc.appspot.com",
    messagingSenderId: "199242738961"
};

const auth = !firebase.apps.length
    ? firebase.initializeApp(config).auth()
    : firebase.app().auth()
const database = !firebase.apps.length
    ? firebase.initializeApp(config).database()
    : firebase.app().database()

export { auth, database }