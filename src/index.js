import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { initializeApp } from 'firebase/app';

ReactDOM.render(
    <App />,
  document.getElementById('root')
);



// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  //...
};
const app = initializeApp(firebaseConfig);