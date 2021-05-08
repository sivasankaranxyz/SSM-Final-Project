import firebase from 'firebase/app';
import 'firebase/firestore';


  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyCIj2aKqIi4Kh484NxRy9EHO54RQgkizTw",
    authDomain: "ssm-clg-project.firebaseapp.com",
    databaseURL: "https://ssm-clg-project-default-rtdb.firebaseio.com",
    projectId: "ssm-clg-project",
    storageBucket: "ssm-clg-project.appspot.com",
    messagingSenderId: "465979826515",
    appId: "1:465979826515:web:634bc658559ada202141a6",
    measurementId: "G-VN16J4K56T"
  };
  // Initialize Firebase
  export const db = firebase.initializeApp(firebaseConfig).firestore();

// <!-- The core Firebase JS SDK is always required and must be listed first -->
// <script src="/__/firebase/8.5.0/firebase-app.js"></script>

// <!-- TODO: Add SDKs for Firebase products that you want to use
//      https://firebase.google.com/docs/web/setup#available-libraries -->
// <script src="/__/firebase/8.5.0/firebase-analytics.js"></script>

// <!-- Initialize Firebase -->
// <script src="/__/firebase/init.js"></script>
// firebase login
// firebase init
// firebase deploy