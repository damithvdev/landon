import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js'
import './App.css';
import Footer from './components/Footer.js';
import Main from './components/Main';

class App extends React.Component {
  render() {
    return (
      <div classNameName="root">
        <Header/>
        <Main/>
        <Footer/>
      </div> 
    );
  } 
}

export default App;
