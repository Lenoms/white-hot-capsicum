import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCDLH2D7oqP2vqc5Mndsr-qnDCrJ0AbQag",
  authDomain: "white-hot-capsicum.firebaseapp.com",
  databaseURL:
    "https://white-hot-capsicum-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "white-hot-capsicum",
  storageBucket: "white-hot-capsicum.appspot.com",
  messagingSenderId: "372907690596",
  appId: "1:372907690596:web:1bc7607efc86c7cb6ced71",
  measurementId: "G-NSBC15VVHE",
};

// Initialize Firebase
initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
console.log(window.location.origin);
root.render(
  <Auth0Provider
    domain="dev-2n83tbaw.us.auth0.com"
    clientId="bbkJJjAaJFRbYUKgQwHPd9KrPXH8VyrX"
    redirectUri={window.location.origin + "/white-hot-capsicum"}
  >
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Auth0Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
