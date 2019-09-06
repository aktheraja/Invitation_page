import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NAV/Nav';
import Form from './Components/Forms/Forms';
import Carousel from './Components/Jumbotron/Jumbotron';

class App extends Component {
  state = {
    name:null
  }
  nameHandler =(event)=>{
    console.log(event.target.value);
    this.setState({name:event.target.value})

  }
  render() {
    return (
      <div className="container">
        <Nav/>
        <Carousel/>
        <Form/>
      </div>

    );
  }
}

export default App;
