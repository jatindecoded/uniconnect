// Basic default Reference firebase setup

import firebase from "firebase";

const firebaseApp = firebase.initializeApp({

    //from Firebase config website
    // apiKey: "AIzaSyDurzVCGhHbeZUn-BCZxy0cLavsfpnRUtI",
    // authDomain: "instagram-clone-react-52896.firebaseapp.com",
    // databaseURL: "https://instagram-clone-react-52896.firebaseio.com",
    // projectId: "instagram-clone-react-52896",
    // storageBucket: "instagram-clone-react-52896.appspot.com",
    // messagingSenderId: "333891082464",
    // appId: "1:333891082464:web:e096ab48006d1f30449885"


    apiKey: "AIzaSyCAv4JOm6k6ps1jilknWQphIQFOgTsUFwo",
  authDomain: "uni-connect-07.firebaseapp.com",
  databaseURL: "https://uni-connect-07-default-rtdb.firebaseio.com",
  projectId: "uni-connect-07",
  storageBucket: "uni-connect-07.appspot.com",
  messagingSenderId: "287069596562",
  appId: "1:287069596562:web:26d6462cbe3bcf722cef4b",
  measurementId: "G-4KGKKYR8EF"
    //from Firebase config website
});

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

export { db, auth, storage };

// export default db;