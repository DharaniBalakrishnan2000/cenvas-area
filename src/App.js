import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar/Nav";
import "./components/Navbar/styles.css";


function App() {
  return (
    <Router>
      <Navbar/>
      <Sidebar/>
      
    </Router>
    
     
  
   
  );
}

export default App;
