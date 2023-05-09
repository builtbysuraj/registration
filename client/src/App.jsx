import "./App.scss";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import { useState, useEffect } from "react";
import Home from "./components/Home";

export default function App() {
  const [userData, setUserData] = useState({});

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      setUserData(JSON.parse(storedUserData));
    }
  }, []);

  useEffect(() => {
    if (userData) {
      localStorage.setItem("userData", JSON.stringify(userData));
    }
  }, [userData]);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            userData ? <Navigate to="/home" /> : <Navigate to="/login" />
          }
        />
        <Route path="/home" element={<Home userData={userData} setUserData={setUserData} />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login setUserData={setUserData} />} />
      </Routes>
    </BrowserRouter>
  );
}
