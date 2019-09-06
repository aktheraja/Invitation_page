import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NAV/Nav';
import Form from './Components/Forms/Forms';
import Carousel from './Components/Jumbotron/Jumbotron';
import Modal from './Components/Modal/Modal';

class App extends Component {
  state = {
    name:null,
      show:false
  };
  nameHandler =(event)=>{
    console.log(event.target.value);
    this.setState({name:event.target.value})

  };
    handleClose = () => {
        this.setState({show:false});
    };
    handleShow = () => {
        this.setState({show:true});
    };

  render() {
    return (
      <div className="container">
        <Nav/>
        <Modal show={this.state.show} handleClose={this.handleClose}/>
        <Carousel showModal={this.handleShow}/>
        <Form/>
      </div>

    );
  }
}

export default App;
