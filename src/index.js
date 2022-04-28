
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App, serviceWorker } from './app';
  import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyC_zJ-HiX2FJlpCU5bPuip1SO2bXfE3IJ0",
  authDomain: "restaruant-53ec4.firebaseapp.com",
  projectId: "restaruant-53ec4",
  storageBucket: "restaruant-53ec4.appspot.com",
  messagingSenderId: "794283379839",
  appId: "1:794283379839:web:2332a23d1c0c3992db034a",
  measurementId: "G-MG2BDPT07R"
}


if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}


export const auth = firebase.auth() 
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()


 
ReactDOM.render(
  <>
  <App />
  </>,document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();







