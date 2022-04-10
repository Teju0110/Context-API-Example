import { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./Components/Cart";
import Header from "./Components/Header";
import Home from "./Components/Home";

function App() {
  
  return (
    <Router>
      <Header />

      <div className="App">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route
            path="/cart"
            element={<Cart/>}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
