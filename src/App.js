import React, { Component } from 'react';

import './App.css';
import Navbar from './components/Navbar';
import Header from './components/Header';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
    <div>
    	<div className="wrapper">
		    <Navbar />
		    <Header />
		</div>
    	<Footer />
    </div>
    );
  }
}

export default App;
