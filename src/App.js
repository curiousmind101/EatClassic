import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlinesCards from "./components/HeadlineCard";
import Food from "./components/Food";
import Category from "./components/Category";
import Copyrights from "./components/Copyrights";
import './index.css';
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Home from "./components/Home";


function App() {
  return (
    <div>
      <Navbar/>
      
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Routes>
    </div>
  );
}

export default App;