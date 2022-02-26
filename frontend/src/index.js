import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


import firebase from "firebase"; 

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChyE8lUIyWu9Oa2Uw_Bfail-StIVfNo9U",
  authDomain: "turntable-6bf59.firebaseapp.com",
  databaseURL: "https://turntable-6bf59-default-rtdb.firebaseio.com",
  projectId: "turntable-6bf59",
  storageBucket: "turntable-6bf59.appspot.com",
  messagingSenderId: "807663333425",
  appId: "1:807663333425:web:0f5996f997850ae58f2510",
  measurementId: "G-PZVJBJN05F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//above is firebase init
//below is setting up the backend w/ express and Node

export var url = "http://localhost:3000"

export function regularRequest(handler, method, body, callback) {
  const http = new XMLHttpRequest()
  http.responseType = 'json'

  http.open(method, url + handler, true) 

  if (body != null) { 
    http.setRequestHeader('Content-Type', 'application/json')
  }

  http.onload = function() {
    callback(http.response)
  }

  http.send(JSON.stringify(body))
}