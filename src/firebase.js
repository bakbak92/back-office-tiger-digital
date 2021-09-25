import firebase from "firebase/app";
import "firebase/firestore";

let config = {
    apiKey: "AIzaSyD5_EGcztstLR4pp2V92H-ZOArVxpYLqNA",
    authDomain: "tiger-digital-933d7.firebaseapp.com",
    projectId: "tiger-digital-933d7",
    storageBucket: "tiger-digital-933d7.appspot.com",
    messagingSenderId: "178528599165",
    appId: "1:178528599165:web:39a5716ceb973b23a14514",
    measurementId: "G-C3MCXC1B0S"
};

firebase.initializeApp(config);

export default firebase.firestore();