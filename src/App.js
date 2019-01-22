import React, { Component } from 'react';
import logo from './logo.svg';
import img from './images/girish.jpg';
import './App.css';
import Personalnfo from './personal/Personal';
import Education from './personal/Education';

class App extends Component {
  constructor(){
    super();
    this.handleChange=this.handleChange.bind(this);
    this.state = {
            name:"",
            status:false
    }   

  }
  handleChange(event){
   this.setState({name:event.target.value,status:true});
   
  }
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
          <p>Your name please</p>
            <input type="text" name="name" placeholder={"Your Name"} onBlur={this.handleChange.bind(this)} />  
          <Education  name={this.state.name} status={this.state.status}/>
        </header>
        <h2>Madanagouda Goudar</h2>
        
      </div>
    );
  }
}

export default App;
