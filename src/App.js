import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlinesCards from "./components/HeadlineCard";
import Food from "./components/Food";
import Category from "./components/Category";
import Copyrights from "./components/Copyrights";
import './index.css';
function App() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <HeadlinesCards/>
      <Food/>
      <Category/>
      <Copyrights/>
    </div>
  );
}

export default App;