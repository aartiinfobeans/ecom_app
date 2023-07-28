import React from "react";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard, Login, Prefrences } from "./view/components";
import useToken from "./view/hooks/useToken";

const App = () => {
  const { token, setToken } = useToken();
  if (!token) {
    return <Login setToken={setToken} />;
  }

  return (
    <Routes>
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/prefrences" element={<Prefrences />} />
    </Routes>
  );
};

export default App;
