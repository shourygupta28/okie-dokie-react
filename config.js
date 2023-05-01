import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAjJkLyMtu4fU2jDwwtOI0hCnsHdC5nu9c",
    authDomain: "todo-app-e2bae.firebaseapp.com",
    projectId: "todo-app-e2bae",
    storageBucket: "todo-app-e2bae.appspot.com",
    messagingSenderId: "448159404425",
    appId: "1:448159404425:web:671105a2044fd2f3e0d158",
    measurementId: "G-P7H2RENE8Q"
};

if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig)
}

export {firebase};