import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCtuJ3uDDNlCvz7EXoWyUH6EmOFCBdIh_c",
  authDomain: "scanteq-aaa19.firebaseapp.com",
  projectId: "scanteq-aaa19",
  storageBucket: "scanteq-aaa19.appspot.com",
  messagingSenderId: "330344662556",
  appId: "1:330344662556:web:caff0b5787f90c563ec1d9",
  measurementId: "G-RW2056K68F"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter basename='/'>
    <App auth={auth} />
    </BrowserRouter>
  </React.StrictMode>
);
