import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./components/Login/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import Prefrences from "./components/Prefrences/Prefrences";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// const dotenv = require("dotenv");
// const env = dotenv.config().parsed;

// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET_ID,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID,
};

// Initialize Firebase
initializeApp(firebaseConfig);

function setToken(userToken) {
  sessionStorage.setItem("token", JSON.stringify(userToken));
}

function getToken() {
  const tokenString = sessionStorage.getItem("token");
  const userToken = JSON.parse(tokenString);
  return userToken?.token;
}

function removeToken() {
  sessionStorage.removeItem("token");
}

function App() {
  const tokenValue = getToken();
  if (!tokenValue) {
    return <Login setToken={setToken} />;
  }
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route
            path="/dashboard"
            component={<Dashboard removeToken={removeToken} />}
          />
          <Route path="/prefrences" component={<Prefrences />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
