import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NAV/Nav';
import Form from './Components/Forms/Forms';
import Carousel from './Components/Jumbotron/Jumbotron';
import Modal from './Components/Modal/Modal';
import axios from 'axios';

class App extends Component {
  state = {
    firstName:null,
      secondName:null,
      show:false,
      name:null
  };
    componentDidMount =()=> {
        axios.get("https://tonz4g2gxf.execute-api.us-east-1.amazonaws.com/test/m")
            .then(res => {
                console.log(res.data)
                // const persons = res.data;
                // this.setState({ name:persons });
            })
    };

  firstNameHandler =(event)=>{
    console.log(event.target.value);
    this.setState({firstName:event.target.value})

  };
    SecondNameHandler =(event)=>{
        console.log(event.target.value);
        this.setState({secondName:event.target.value})

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
        <Form lastname={(event)=>{this.SecondNameHandler(event)}} firstname={(event)=>{this.firstNameHandler(event)}}
        clicked={this.componentDidMount}/>
      </div>

    );
  }
}

export default App;
