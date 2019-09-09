import React, { Component } from 'react';
import './App.css';
import Nav from './Components/NAV/Nav';
import Form from './Components/Forms/Forms';
import Carousel from './Components/Jumbotron/Jumbotron';
import Modal from './Components/Modal/Modal';
import ModalComplete from "./Components/Modal/ModalComplete";
import axios from 'axios';

class App extends Component {
  state = {
    firstName:' ',
      secondName:' ',
      show:false,
      name:null,
      isLoading: false,
      showModalComplete:false
  };
    Upload =async (event) =>{
        event.preventDefault();
        const data = new FormData(event.target);
       const datas={
            firstname:data.get("firstname"),
           secondname:data.get("secondname")
        };
        this.setState({ isLoading: true });
        axios.post('https://tonz4g2gxf.execute-api.us-east-1.amazonaws.com/test/akin/',datas,{headers:{
                "content-type":"application/json"
            }}
        )
            .then(res => {
                console.log(res.data)
            });
        this.setState({ isLoading: false });
        this.setState({showModalComplete:true});
    };

  inputHandler =(event)=>{

    this.setState({firstName:event.target.value});
  };
    inputHandler2 =(event)=>{

        this.setState({secondName:event.target.value});
    };

    handleClose = () => {
        this.setState({show:false});

    };
    handleShow = () => {
        this.setState({show:true});
    };

    ModalCompleteHandleClose = () => {
        this.setState({showModalComplete:false});

    };
    // ModalCompleteHandleShow  = () => {
    //     this.setState({show:true});
    // };

  render() {
      const spinner = (
          <div className="spinner-border" role="status">
              <span className="sr-only">Loading...</span>
          </div>
      );

      const result = this.state.showModalComplete ? (
          <ModalComplete shows={this.state.showModalComplete} handleCloses={this.ModalCompleteHandleClose}/>
      ) : null;

      const showSpinnerOrResults = this.state.isLoading ? spinner : result;
    return (
      <div className="container">
        <Nav/>
        <Modal show={this.state.show} handleClose={this.handleClose}/>
        <Carousel showModal={this.handleShow}/>
        <Form submits={this.Upload} input1={this.inputHandler}
              input2={this.inputHandler2}/>
          <div className="container-fluid my-5">{showSpinnerOrResults}</div>
      </div>

    );
  }
}

export default App;
