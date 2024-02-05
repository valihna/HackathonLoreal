import React, { useState, useMemo } from "react";
import { Outlet } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import "./App.css";

function App() {
  const [connected, setConnected] = useState([]);
  return (
    <div className="App">
      <AuthContext.Provider
        value={useMemo(
          () => ({ connected, setConnected }),
          [connected, setConnected]
        )}
      >
        <Navbar />
        <Outlet />
      </AuthContext.Provider>
      <Footer />
    </div>
  );
}

export default App;
