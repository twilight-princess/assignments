import React, { Component } from 'react';

import "./styles/app.css";
import Header from "./Header";
import Content from "./Content";
import Footer from "./Footer";

function App() {
  return (
    <div className="App"/* style={{backgroundColor: "black"}}*/>
      <p>
        Stuff about this random business
      </p>
      <Header />
      <Content />
      <Footer />
    </div>
    )
}

export default App;
