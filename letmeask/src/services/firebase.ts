import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyAVGmTK1ICLUqZuyCMEskAkGUl0eMLAYLs",  
    authDomain: "letmeask-b71ea.firebaseapp.com",  
    databaseURL: "https://letmeask-b71ea-default-rtdb.firebaseio.com",  
    projectId: "letmeask-b71ea",  
    storageBucket: "letmeask-b71ea.appspot.com",
    messagingSenderId: "641984083453",  
    appId: "1:641984083453:web:d4e518c73b7fdc16939594"
  };

  firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();