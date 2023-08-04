import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard, Login, Prefrences } from "./view/components";
import useToken from "./view/hooks/useToken";
import { useNavigate, Redirect, Navigate } from "react-router-dom";

const App = () => {
  const { token, setToken } = useToken();

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/login" element={<Login setToken={setToken} />} />
      <Route path="/prefrences" element={<Prefrences />} />
    </Routes>
  );
};

export default App;
