import './App.css';
import React from "react";
import Header from "./components/Header/Header";
import PhotoList from "./components/PhotoList/PhotoList";

function App() {
  return (
    <div className="App">
      <Header/>
      <PhotoList/>
    </div>
  );
}

export default App;
