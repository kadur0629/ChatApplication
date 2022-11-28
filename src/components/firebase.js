import firebase from "firebase/app";
import "firebase/auth";

// We are exporting the auth created firebase, that includes 
// all of our api keys, project id's etc. 

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyD-Tu-0xIv_zrn_GHLxxtLEazTB0oyp2pQ",
    authDomain: "chit-chat-computer-networking.firebaseapp.com",
    projectId: "chit-chat-computer-networking",
    storageBucket: "chit-chat-computer-networking.appspot.com",
    messagingSenderId: "580434425901",
    appId: "1:580434425901:web:2c0c68cce519bb5f9360a4"
  }).auth();