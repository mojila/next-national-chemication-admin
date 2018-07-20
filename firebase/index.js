import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/database'

const config = {
    apiKey: "AIzaSyCg2iMT2SlEY2km2gXuEXJ_q0uExTMTQeo",
    authDomain: "national-chemication.firebaseapp.com",
    databaseURL: "https://national-chemication.firebaseio.com",
    projectId: "national-chemication",
    storageBucket: "national-chemication.appspot.com",
    messagingSenderId: "595587030048"
};

const auth = !firebase.apps.length
    ? firebase.initializeApp(config).auth()
    : firebase.app().auth()
const database = !firebase.apps.length
    ? firebase.initializeApp(config).database()
    : firebase.app().database()

export { auth, database }