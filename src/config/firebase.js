import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyDJU8WZjsGNAKSPC9EG1H6JKLmxIkeMI4E",
    authDomain: "eventos-9b7b1.firebaseapp.com",
    databaseURL: "https://eventos-9b7b1.firebaseio.com",
    projectId: "eventos-9b7b1",
    storageBucket: "eventos-9b7b1.appspot.com",
    messagingSenderId: "1069820652517",
    appId: "1:1069820652517:web:58de5dec46c414d4a0dd0c",
    measurementId: "G-TFFBMXKDMC"
  };
  // Initialize Firebase
export default firebase.initializeApp(firebaseConfig);