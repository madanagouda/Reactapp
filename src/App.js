import React, { Component } from 'react';
import logo from './logo.svg';
import img from './images/girish.jpg';
import './App.css';
import Personalnfo from './personal/Personal';
import Education from './personal/Education';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <p>
            <img src={img}/>
          </p>
          <Personalnfo />
          <a
            className="App-link"
            href="#"
            target="_blank"
            rel="noopener noreferrer"
          >
           
          </a>
          <Education/>
        </header>
        
          <h2>Madanagouda Goudar</h2>
        
      </div>
    );
  }
}

export default App;
