import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
} from "react-router-dom";

import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';
import Main from '../components/Main/Main.js';

function App() {
  return (
    <Router>
    <div className="App">
      <div className="wrapper">
        <header>
          <Header />
        </header>
        <main>
          <Main />
        </main>
        <footer className="Footer">
          <Footer />
        </footer>
      </div>  
    </div>
    </Router>
  );
}

export default App;
